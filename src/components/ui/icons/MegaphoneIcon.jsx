/**
 * Megaphone used by the announcement banner.
 *
 * Traced from `reference/banner-below-navbar.png` at 1:1 — the horn points
 * right, with a back cap, a knob on the bell and four sound rays. Drawn on a
 * 66 x 57 grid so the 3-unit stroke matches the source weight at any size.
 */
export default function MegaphoneIcon({ className }) {
  return (
    <svg
      viewBox="0 0 66 57"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* back cap */}
      <path d="M8 20H5a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h3" />
      {/* handle */}
      <path d="M15 38l3.5 14h5.5L24.5 38" />
      {/* body + cone */}
      <path d="M8 17h12l19-13v38L20 38H8z" />
      {/* body / cone divider */}
      <path d="M20 17v21" />
      {/* bell */}
      <rect x="39" y="3" width="6" height="41" rx="3" />
      {/* knob */}
      <path d="M45 20a4.5 4.5 0 0 1 0 9" />
      {/* sound rays */}
      <path d="M51 9l5-8" />
      <path d="M54 14l4-4" />
      <path d="M54 22.5l10-2" />
      <path d="M55 34.5l7 6" />
    </svg>
  )
}
