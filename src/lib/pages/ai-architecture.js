/* The Ignitho AI architecture, reduced to the four stations a request passes
   through. This is the glance version - the point is the path, not the parts
   list, so each station names only the two or three marks that make it
   recognisable.

   `brand` names an SVG in /images/arch (Simple Icons) drawn in `color`;
   `lucide` falls back to a glyph where a component has no brand mark. */

export const ARCHITECTURE = {
  heading: 'The Trust Architecture behind FRIEND Agents',

  lead: [
    'Every FRIEND request travels the same governed path. It enters through an authenticated, filtered edge, identifiers are stripped before anything reaches a model, and the work runs as a deterministic graph rather than a loose chain of prompts.',
    'Answers are grounded in your own systems of record and written to an audit trail on the way back — so what you get is traceable, not just plausible.',
  ],

  badges: ['SOC 2 Type II', 'ISO 27001', 'HIPAA', 'Zero-Trust Mesh', 'mTLS 1.3'],

  /* the map: four stations, top to bottom, in the order a request meets them */
  stations: [
    {
      id: 'people',
      step: '01',
      label: 'People & Apps',
      caption: 'Business users and engineers, in one governed workspace',
      accent: '#2F7BD8',
      marks: [
        { lucide: 'users', color: '#2F7BD8', name: 'Business Users' },
        { brand: 'nextdotjs', color: '#16063A', name: 'Next.js' },
      ],
    },
    {
      id: 'gate',
      step: '02',
      label: 'Governed Entry',
      caption: 'Authenticated at the edge, identifiers stripped before anything moves',
      accent: '#FF9900',
      marks: [
        { lucide: 'shield', color: '#FF9900', name: 'WAF' },
        { brand: 'auth0', color: '#EB5424', name: 'SSO' },
        { lucide: 'eyeOff', color: '#C0392B', name: 'PII Anonymizer' },
      ],
    },
    {
      id: 'engine',
      step: '03',
      label: 'Agent Engine',
      caption: 'A deterministic graph of agents, screened by the AI firewall',
      accent: '#5B16C4',
      marks: [
        { lucide: 'gitBranch', color: '#5B16C4', name: 'DAG Executor' },
        { lucide: 'bot', color: '#2F7BD8', name: 'Multi-Agent' },
        { lucide: 'shieldAlert', color: '#C0392B', name: 'AI Firewall' },
      ],
    },
    {
      id: 'ground',
      step: '04',
      label: 'Models & Your Data',
      caption: 'The cheapest capable model, answering only from your systems of record',
      accent: '#00A274',
      marks: [
        { brand: 'amazonwebservices', color: '#FF9900', name: 'Bedrock' },
        { brand: 'mongodb', color: '#47A248', name: 'MongoDB' },
        { lucide: 'boxes', color: '#DC244C', name: 'Qdrant' },
      ],
    },
  ],

  lifecycle: {
    label: 'Runs on',
    nodes: [
      { brand: 'terraform', color: '#844FBA', name: 'Terraform' },
      { brand: 'kubernetes', color: '#326CE5', name: 'Kubernetes' },
      { brand: 'docker', color: '#2496ED', name: 'Docker' },
      { brand: 'github', color: '#181717', name: 'GitOps' },
    ],
  },
}
