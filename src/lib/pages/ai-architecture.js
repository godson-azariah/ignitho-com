/* The Ignitho AI architecture as the deck's three tiers: ingress, the
   Kubernetes platform, then the data and model tier. This is the glance
   version - the point is the shape, not the parts list, so a tier names what it
   is and lets its marks say what it is built from.

   `brand` names an SVG in /images/arch (Simple Icons) drawn in `color`;
   `lucide` falls back to a glyph where a component has no brand mark. */

export const ARCHITECTURE = {
  heading: 'Trust Architecture behind FRIEND Agentic Suites',

  lead: [
    'Every FRIEND request travels the same governed path. It enters through an authenticated, filtered edge, identifiers are stripped before anything reaches a model, and the work runs as a deterministic graph rather than a loose chain of prompts.',
    'Answers are grounded in your own systems of record and written to an audit trail on the way back — so what you get is traceable, not just plausible.',
  ],

  badges: ['SOC 2 Type II', 'ISO 27001', 'HIPAA', 'Zero-Trust Mesh', 'mTLS 1.3'],

  /* The deck's three tiers. Each carries its marks and one short line - the
     deck spells every component out because it is a slide being talked over;
     here the icons do that work, so only what a tier is gets written down. */
  stations: [
    {
      id: 'ingress',
      step: '01',
      label: 'Stakeholders & Ingress',
      caption: 'SSO, WAF and rate limiting at the edge',
      accent: '#2F7BD8',
      marks: [
        { lucide: 'users', color: '#2F7BD8', name: 'Business Users & Engineers' },
        { lucide: 'shield', color: '#FF9900', name: 'Ingress & WAF Gateway' },
        { brand: 'auth0', color: '#EB5424', name: 'SSO / OAuth2' },
      ],
    },
    {
      id: 'platform',
      step: '02',
      label: 'Kubernetes Orchestration',
      caption: 'EKS, Helm and Terraform managed',
      accent: '#00A274',
      marks: [
        { brand: 'nextdotjs', color: '#16063A', name: 'Next.js Frontend' },
        { brand: 'nodedotjs', color: '#5FA04E', name: 'Node.js Middleware' },
        { brand: 'rabbitmq', color: '#FF6600', name: 'RabbitMQ Event Bus' },
        { brand: 'fastapi', color: '#009688', name: 'FastAPI Agent & RAG Suite' },
        { brand: 'vault', color: '#FFB800', name: 'Vault Secrets & Keys' },
      ],
    },
    {
      id: 'data',
      step: '03',
      label: 'Datasets, Storage & Models',
      caption: 'Encrypted at rest, AES-256',
      accent: '#5B16C4',
      marks: [
        { brand: 'mongodb', color: '#47A248', name: 'MongoDB Cluster' },
        { brand: 'redis', color: '#FF4438', name: 'Redis Cache' },
        { lucide: 'boxes', color: '#DC244C', name: 'Qdrant Vector Cluster' },
        { brand: 'amazons3', color: '#569A31', name: 'Amazon S3' },
        { brand: 'amazonwebservices', color: '#FF9900', name: 'AWS Bedrock' },
      ],
    },
  ],

  lifecycle: {
    label: 'Runs on',
    nodes: [
      { brand: 'terraform', color: '#844FBA', name: 'Terraform' },
      { brand: 'helm', color: '#0F1689', name: 'Helm' },
      { brand: 'docker', color: '#2496ED', name: 'Docker' },
      { brand: 'github', color: '#181717', name: 'GitOps' },
    ],
  },
}
