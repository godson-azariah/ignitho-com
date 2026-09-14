/*
  Regenerates src/components/sections/home/friendFigures.js - the person and
  robot in the home hero - from two source assets:

    public/images/hero-image-svg.svg  a vector trace of the sketch
    public/images/friend-hero.png     the sketch with its background removed

  Why both: the trace treated every white area as background, so the shirt,
  the shoes and the robot's white shell are simply missing from it (holes that
  only looked right on a white canvas). The PNG's alpha channel still marks
  where those whites were - as half-transparent pixels - so the white
  silhouettes are rebuilt from it, cleaned up, vectorised with potrace, and
  laid under the trace's colour paths. Each figure is split into an arm layer
  (drawn first, overlapping into the torso) and a body layer, so the arm can
  rotate at the shoulder in the hero animation without opening a seam.

  Run:  node scripts/build-friend-figures.js
  Optional: pass a directory as the first argument to also write a composed
  test render (figures-composed.png) there for a visual check.
*/
const path = require('path')
const fs = require('fs')
const sharp = require('sharp')
const potrace = require('potrace')

const ROOT = path.resolve(__dirname, '..')
const PNG = path.join(ROOT, 'public/images/friend-hero.png')
const SVG = path.join(ROOT, 'public/images/hero-image-svg.svg')
const OUT_MODULE = path.join(ROOT, 'src/components/sections/home/friendFigures.js')
const RENDER_DIR = process.argv[2]

// Indices into the trace's path list (in file order) for each figure layer.
// Everything else in the trace - background, blobs, chips, labels, connector
// lines, the FRIEND word, the merged "skirt" white under the robot - is left
// out; FriendIllustration.jsx draws its own versions of those.
const GROUPS = {
  humanArm: [77, 78],
  humanBody: [22, 23, 24, 25, 34, 43, 44, 45, 46, 47, 84, 88],
  robotArm: [74, 75, 56, 58, 59, 60, 147],
  robotBody: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 27, 28, 30, 32, 33, 61, 62, 63, 64, 65, 68, 69, 70, 71, 72, 73, 79, 80, 81],
}
const EYE = 63 // the visor's green squiggle, which blinks
const FIGURE_WHITE = '#F7F7FA'

// Where each white layer lives, in the 1536 x 1024 source space. The arm
// windows deliberately reach into the torso: that overlap hides under the body.
const SPLIT_X = 767 // the fists meet here
const LAYERS = {
  humanArm: (x, y) => x < SPLIT_X && x >= 596 && y >= 335 && y <= 450,
  humanBody: (x, y) => x < SPLIT_X,
  robotArm: (x, y) => x >= SPLIT_X && x <= 992 && y >= 350 && y <= 475,
  robotBody: (x, y) => x >= SPLIT_X,
}
// Regions to ignore entirely: the FRIEND word block, the "expertise" label
// and connector dot, and the spark - the removal tool left white halos there.
const EXCLUDE = [[575, 495, 965, 780], [700, 170, 840, 275], [735, 320, 800, 362]]

const tracePng = (buf) =>
  new Promise((resolve, reject) => {
    const p = new potrace.Potrace({ turdSize: 40, alphaMax: 1.0, optCurve: true, optTolerance: 0.3, threshold: 128, blackOnWhite: true })
    p.loadImage(buf, (err) => {
      if (err) return reject(err)
      const m = p.getPathTag().match(/ d="([^"]*)"/)
      resolve(m ? m[1] : '')
    })
  })
const round1 = (d) => d.replace(/-?\d+\.\d+/g, (n) => String(Math.round(parseFloat(n) * 10) / 10))

async function main() {
  const { data, info } = await sharp(PNG).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const W = info.width
  const H = info.height
  const N = W * H
  const inRect = (x, y, r) => x >= r[0] && x <= r[2] && y >= r[1] && y <= r[3]

  // 1. Candidate white pixels.
  const raw = new Uint8Array(N)
  for (let k = 0; k < N; k++) {
    const r = data[k * 4]
    const g = data[k * 4 + 1]
    const b = data[k * 4 + 2]
    const a = data[k * 4 + 3]
    const x = k % W
    const y = (k / W) | 0
    if (!(x >= 280 && x <= 1235 && y >= 215 && y <= 875)) continue
    if (EXCLUDE.some((rc) => inRect(x, y, rc))) continue
    // Neutral tint only: rejects the mint blob (green-heavy) and the peach
    // blob (red-heavy), whose soft gradients otherwise leak in.
    const neutral = g - r <= 12 && r - b <= 8
    // Half-transparent whites (shirt, shoes, robot shell, arms). The removal
    // tool's halo band around dark shapes sits at alpha 18-55; real whites 96+.
    const semi = a >= 90 && a <= 240 && r >= 232 && g >= 232 && b >= 236 && neutral
    // Opaque near-whites (robot legs, light shading). The ground line (R
    // 225-227) starts at row 873; the feet above it are R 234+.
    const opaque = a > 240 && r >= 222 && g >= 222 && b >= 235 && neutral && (y < 872 || r >= 231)
    if (semi || opaque) raw[k] = 1
  }

  // 2. Morphological cleanup.
  const disc = (r) => {
    const pts = []
    for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) if (dx * dx + dy * dy <= r * r + r) pts.push([dx, dy])
    return pts
  }
  const dil = (src, r) => {
    const pts = disc(r)
    const out = new Uint8Array(N)
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++) {
        let v = 0
        for (const [dx, dy] of pts) {
          const xx = x + dx
          const yy = y + dy
          if (xx >= 0 && yy >= 0 && xx < W && yy < H && src[yy * W + xx]) {
            v = 1
            break
          }
        }
        out[y * W + x] = v
      }
    return out
  }
  const ero = (src, r) => {
    const pts = disc(r)
    const out = new Uint8Array(N)
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++) {
        let v = 1
        for (const [dx, dy] of pts) {
          const xx = x + dx
          const yy = y + dy
          if (xx < 0 || yy < 0 || xx >= W || yy >= H || !src[yy * W + xx]) {
            v = 0
            break
          }
        }
        out[y * W + x] = v
      }
    return out
  }
  const components = (mask, onComponent) => {
    const lab = new Int32Array(N).fill(-1)
    let id = 0
    for (let k = 0; k < N; k++) {
      if (!mask[k] || lab[k] >= 0) continue
      const stack = [k]
      const px = []
      lab[k] = id
      let touchesEdge = false
      while (stack.length) {
        const q = stack.pop()
        px.push(q)
        const x = q % W
        const y = (q / W) | 0
        if (x === 0 || y === 0 || x === W - 1 || y === H - 1) touchesEdge = true
        for (const n of [q - 1, q + 1, q - W, q + W]) {
          if (n < 0 || n >= N || Math.abs((n % W) - x) > 1) continue
          if (mask[n] && lab[n] < 0) {
            lab[n] = id
            stack.push(n)
          }
        }
      }
      onComponent(px, touchesEdge)
      id++
    }
  }

  let m = ero(dil(raw, 2), 2) // close: knit the grain
  {
    // fill small enclosed holes without bridging real gaps (between the legs)
    const inv = new Uint8Array(N)
    for (let k = 0; k < N; k++) inv[k] = m[k] ? 0 : 1
    components(inv, (px, touchesEdge) => {
      if (!touchesEdge && px.length < 250) for (const q of px) m[q] = 1
    })
  }
  m = dil(ero(m, 1), 1) // open: drop specks
  m = dil(m, 1) // tuck 1px under the colour paths so no hairline seams show
  components(m, (px) => {
    if (px.length < 300) for (const q of px) m[q] = 0
  })

  // 3. Vectorise each layer.
  const silhouettes = {}
  for (const [name, inside] of Object.entries(LAYERS)) {
    const png = Buffer.alloc(N * 4)
    for (let k = 0; k < N; k++) {
      const v = m[k] && inside(k % W, (k / W) | 0) ? 0 : 255
      png[k * 4] = v
      png[k * 4 + 1] = v
      png[k * 4 + 2] = v
      png[k * 4 + 3] = 255
    }
    const buf = await sharp(png, { raw: { width: W, height: H, channels: 4 } }).png().toBuffer()
    silhouettes[name] = round1(await tracePng(buf))
    console.log(`${name}: silhouette ${silhouettes[name].length} chars`)
  }

  // 4. Colour paths from the trace.
  const src = fs.readFileSync(SVG, 'utf8')
  const body = src.slice(src.indexOf('</metadata>') + 11)
  const re = /<path fill="([^"]*)" d="([^"]*)"\/>/g
  const traced = []
  let mm
  while ((mm = re.exec(body))) traced.push({ fill: mm[1], d: round1(mm[2]) })

  const figures = {}
  for (const [name, idx] of Object.entries(GROUPS)) {
    figures[name] = {
      silhouette: silhouettes[name],
      parts: idx.map((i) => ({ fill: traced[i].fill, d: traced[i].d, ...(i === EYE ? { eye: true } : {}) })),
    }
  }

  // 5. Emit the module.
  const header = [
    '/*',
    '  FRIEND hero figures - generated by scripts/build-friend-figures.js, do not hand-edit.',
    '  Colour paths come from public/images/hero-image-svg.svg (a vector trace of',
    "  friend-hero.png); the white silhouettes are re-traced from friend-hero.png's",
    '  alpha channel, because the trace treated every white area as background and',
    "  left the shirt, shoes and the robot's shell as holes. Coordinates are the",
    '  1536 x 1024 space of both source files. Each figure is split into an arm',
    '  layer (drawn first, overlapping into the torso) and a body layer, so the arm',
    '  can rotate at the shoulder without opening a seam.',
    '*/',
    `export const FIGURE_WHITE = '${FIGURE_WHITE}'`,
    '',
    'export const FIGURES = ' + JSON.stringify(figures),
    '',
  ].join('\n')
  fs.writeFileSync(OUT_MODULE, header)
  console.log(`wrote ${path.relative(ROOT, OUT_MODULE)} (${header.length} bytes)`)

  // 6. Optional visual check.
  if (RENDER_DIR) {
    const layer = (n) =>
      `<path fill="${FIGURE_WHITE}" fill-rule="evenodd" d="${figures[n].silhouette}"/>` +
      figures[n].parts.map((p) => `<path fill="${p.fill}" d="${p.d}"/>`).join('')
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 70 1512 830" width="1512" height="830">' +
      '<rect x="12" y="70" width="1512" height="830" fill="#2c0a78"/>' +
      ['humanArm', 'humanBody', 'robotArm', 'robotBody'].map((n) => `<g>${layer(n)}</g>`).join('') +
      '</svg>'
    const out = path.join(RENDER_DIR, 'figures-composed.png')
    await sharp(Buffer.from(svg)).png().toFile(out)
    console.log(`render: ${out}`)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
