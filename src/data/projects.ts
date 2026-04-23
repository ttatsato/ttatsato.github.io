export type Project = {
  num: string;
  title: string;
  period: string;
  contract: string;
  team: string;
  role: string[];
  stack: string[];
  note?: string;
  highlights?: string[];
  link?: string;
};

// Curated project history, ordered newest → oldest.
// Source: project-history.mdx + design sample data, normalized.
export const projects: Project[] = [
  {
    num: '10',
    title: 'Interview Matching Platform — Functional Enhancement',
    period: 'Apr 2024 → Present',
    contract: 'Quasi-delegation',
    team: '~20',
    role: ['Design', 'Frontend', 'Backend', 'DB schema'],
    stack: ['Next.js', 'NestJS', 'LIFF', 'Redis', 'PostgreSQL', 'Docker', 'Worker', 'GCP', 'Vercel'],
    note: 'Joined an established team, shipping cross-stack features end-to-end.',
    highlights: [],
  },
  {
    num: '09',
    title: 'SES-Boost — In-house SaaS',
    period: 'Dec 2023 → Present',
    contract: 'Own product',
    team: '1–5',
    role: ['Market research', 'Interviews', 'Marketing', 'Design', 'Dev', 'QA', 'Ops', 'Sales'],
    stack: ['Next.js', 'Supabase', 'FastAPI', 'Celery', 'Axum (Rust)', 'Redis', 'PostgreSQL', 'GCP', 'Cloudflare', 'Elasticsearch'],
    note: 'Forward-email → classify → match SaaS at ses-boost.app.',
    highlights: [
      'Low-latency email → structured data (Case vs. Requirement)',
      'Moved hot paths Python → Rust, added batch processing',
      'UI/UX reorganized from user interviews',
      'Sales via partnerships',
    ],
    link: 'https://ses-boost.app/',
  },
  {
    num: '08',
    title: 'BtoB Auction Site (Project A)',
    period: 'Jul 2024 → Dec 2024',
    contract: 'Fixed-price',
    team: '3',
    role: ['Sales', 'Requirements', 'Design', 'Dev'],
    stack: ['Next.js', 'Supabase', 'FastAPI', 'Vercel', 'Render'],
    highlights: ['Start-small MVP before full build', 'Joined shipping ops to surface real user friction'],
  },
  {
    num: '07',
    title: 'BtoB Auction Site (Project B)',
    period: 'Jul 2024 → Dec 2024',
    contract: 'Fixed-price',
    team: '3',
    role: ['Sales', 'Requirements', 'Design', 'Dev'],
    stack: ['Next.js', 'Supabase', 'FastAPI', 'Vercel', 'Render', 'Docker'],
    highlights: ['Same MVP-first pattern, different client', 'Stakeholder expectation alignment throughout'],
  },
  {
    num: '06',
    title: 'Crypto Exchange — AngularJS → Vue Migration',
    period: 'Apr 2023 → Sep 2023',
    contract: 'Quasi-delegation',
    team: '8',
    role: ['Leader support', 'Test design', 'QA coordination', 'Impl', 'DevOps'],
    stack: ['Vue', 'AngularJS', 'Rails', 'GH Actions', 'Jest', 'Playwright'],
    highlights: [
      'Zero-error, zero-bug cutover on a live financial service',
      'Designed test set capturing pre-migration behavior',
      'QA ↔ dev coordination flow',
    ],
  },
  {
    num: '05',
    title: 'Crypto Exchange — Features & Automated Testing',
    period: 'Apr 2023 → Sep 2023',
    contract: 'Quasi-delegation',
    team: '5',
    role: ['Full-stack', 'Test infra', 'Design system'],
    stack: ['AngularJS', 'Rails', 'GH Actions', 'Jest', 'Playwright', 'Redis', 'Sidekiq'],
    highlights: ['Design system published as npm package', 'Playwright + Jest automated test environment'],
  },
  {
    num: '04',
    title: 'Video Platform for Hairdressers',
    period: 'Apr 2023 → Sep 2023',
    contract: 'Quasi-delegation',
    team: '11',
    role: ['Full-stack', 'Vendor negotiation', 'Mentoring'],
    stack: ['Nuxt.js', 'Express', 'Redis', 'MySQL', 'Veritrans', 'Docker'],
    highlights: ['Multilingual team coordination', 'Led payment vendor negotiations'],
  },
  {
    num: '03',
    title: 'Rental Tenant SaaS — Development Support',
    period: 'Jan 2021 → Feb 2022',
    contract: 'Quasi-delegation',
    team: '8',
    role: ['Frontend', 'Backend', 'New system'],
    stack: ['Nuxt.js', 'Rails', 'Redis', 'PostgreSQL', 'Jest', 'Docker'],
    highlights: ['Reduced frontend build time to ~1/8', 'Launched new internal system'],
  },
  {
    num: '02',
    title: 'HealthTech Service — Planning & Frontend',
    period: 'Jul 2018 → Mar 2020',
    contract: 'Quasi-delegation',
    team: '12',
    role: ['Frontend', 'Service planning'],
    stack: ['Vue', 'Rails', 'Redis', 'Heroku', 'Docker', 'Zeplin'],
    highlights: ['Rapid iteration for market validation', 'Bridged stakeholders / designers / backend / AI team'],
  },
  {
    num: '01',
    title: 'Paper Similarity Search Engine',
    period: 'Jul 2018 → Mar 2020',
    contract: 'Freelance',
    team: '5',
    role: ['Design', 'Impl'],
    stack: ['Vue', 'Python', 'Scala (Play 2)', 'Elasticsearch'],
    highlights: ['Indexed PubMed / Google Scholar', 'Similarity search atop BM25'],
  },
];

export const certs = [
  { date: 'May 2016', label: 'Oracle Certified Java Programmer — Silver SE 8' },
  { date: 'Dec 2025', label: 'Google Cloud — Generative AI Leader' },
];
