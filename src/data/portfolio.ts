/**
 * Central portfolio data — generated from Prakash's resume (prakash_chilukuri_resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Chilukuri Subrahmanya Sri Prakash',
  displayName: 'Prakash Chilukuri',
  firstName: 'PRAKASH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A PRAKASH ORIGINAL',
  role: 'AI/ML Developer & Full-Stack Developer',
  tagline: ['AI / ML Developer', 'Full-Stack Developer', 'Python'],
  intro:
    'A B.Tech Computer Science and Engineering student (Amrita Vishwa Vidyapeetham) with hands-on experience building AI-powered applications and full-stack web systems. Interested in Generative AI, agentic systems, and automation tools.',
  location: 'Coimbatore, Tamil Nadu',
  email: 'sriprakashchilukuri@gmail.com',
  phone: '+91 9494507272',
  links: {
    linkedin: 'https://linkedin.com/in/chilukuriprakash',
    github: 'https://github.com/prakashchilukuri',
  },
  resumePdf: '/assets/Prakash_Chilukuri_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Prakash Chilukuri',
  },
  interests: ['AI & Agentic Systems', 'Full-Stack Development', 'Data Automation'],
};

export const education = [
  {
    school: 'Amrita Vishwa Vidyapeetham',
    place: 'Coimbatore',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2023 – 2027',
    score: 'B.Tech CSE',
  },
  {
    school: 'Tirumala Junior Kalasala',
    place: 'Andhra Pradesh',
    degree: 'Intermediate — State Board',
    period: '2021 – 2023',
    score: 'Intermediate',
  },
  {
    school: 'Narayana School',
    place: 'Andhra Pradesh',
    degree: 'SSC — State Board',
    period: '2020 – 2021',
    score: 'SSC',
  },
];

export const experience = [
  {
    company: 'SYNCpedia Technologies Pvt. Ltd.',
    role: 'AI/ML Developer Trainee',
    place: 'Remote',
    period: '28 July 2025 – 30 August 2026',
    points: [
      'Worked on AI/ML application development and integration of intelligent features.',
      'Contributed to data processing, model development, and application integration.',
    ],
  },
  {
    company: 'SYNCpedia Technologies Pvt. Ltd.',
    role: 'Front-End Developer Intern',
    place: 'Remote',
    period: '27 May 2025 – 26 July 2025',
    points: [
      'Developed responsive user interfaces using HTML, CSS, and JavaScript.',
      'Supported frontend implementation and website development in a remote work environment.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ai-document-summarizer',
    title: 'AI Document Summarizer',
    year: '2025',
    genre: 'AI • NLP • LLM • Gradio',
    logline: 'An LLM-based document summarization application supporting TXT, PDF, and DOCX inputs.',
    stack: ['Python', 'LLM', 'Gradio', 'NLP'],
    build: [
      'Built an LLM-based document summarization application supporting TXT, PDF, and DOCX inputs.',
      'Implemented text preprocessing, tokenization, model inference, and summary generation through a Gradio interface.',
    ],
    features: [
      'LLM-based document summarization',
      'Multi-format input: TXT, PDF, DOCX',
      'Text preprocessing & tokenization',
      'Model inference pipeline',
      'Gradio web interface',
    ],
    metrics: [
      { value: '3', label: 'input formats supported' },
      { value: 'LLM', label: 'powered inference' },
      { value: 'Gradio', label: 'web interface' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'secure-voting-system',
    title: 'Secure Electronic Voting System',
    year: '2025',
    genre: 'Full-Stack • Security • REST API',
    logline: 'A transparent multi-role electronic voting platform with encrypted vote storage and audit logging.',
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    build: [
      'Developed a multi-role platform for voters, administrators, election officials, and observers, with encrypted vote storage and audit logging.',
      'Implemented REST APIs and role-based functionality across the application.',
    ],
    features: [
      'Multi-role platform (voters, admins, officials, observers)',
      'Encrypted vote storage',
      'Audit logging',
      'REST API backend',
      'Role-based access control',
    ],
    metrics: [
      { value: '4', label: 'roles supported' },
      { value: '100%', label: 'encrypted votes' },
      { value: 'Full', label: 'audit trail' },
    ],
    github: 'https://github.com/prakashchilukuri',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'nss-volunteer',
    title: 'NSS Volunteer',
    org: 'Amrita Vishwa Vidyapeetham',
    detail: 'Active National Service Scheme volunteer at Amrita Vishwa Vidyapeetham.',
    laurel: 'Community Service',
  },
  {
    id: 'event-organizer',
    title: 'Department Event Organizer',
    org: 'CSE Dept, Amrita',
    detail: 'Organized and managed department-level technical and cultural events.',
    laurel: 'Leadership',
  },
  {
    id: 'ml-course',
    title: 'ML Course Certified',
    org: 'Udemy',
    detail: 'Completed The Complete Machine Learning Course with Python on Udemy.',
    laurel: 'Certification',
  },
  {
    id: 'genai-analytics',
    title: 'GenAI Data Analytics',
    org: 'TATA / Forage',
    detail: 'Completed TATA GenAI Powered Data Analytics program on Forage.',
    laurel: 'Industry Program',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Udemy', name: 'The Complete Machine Learning Course with Python', link: '#' },
  { issuer: 'Forage', name: 'TATA GenAI Powered Data Analytics', link: '#' },
  { issuer: 'Finlatics', name: 'Investment Banking Analyst Program', link: '#' },
  { issuer: 'Finlatics', name: 'Market Analyst Program', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Python is the primary language',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C', mono: 'C' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI / ML',
    subtitle: 'Models, data & intelligence',
    skills: [
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Data Preprocessing', mono: 'Dp' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Pandas', mono: 'Pd' },
    ],
  },
  {
    id: 'fullstack',
    title: 'Full Stack',
    subtitle: 'Frontend to database',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'MySQL', mono: 'My' },
      { name: 'PostgreSQL', mono: 'Pg' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Dev environment & productivity',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Excel', mono: 'Ex' },
      { name: 'Power BI', mono: 'Bi' },
    ],
  },
  {
    id: 'competencies',
    title: 'Core Competencies',
    subtitle: 'What I build',
    skills: [
      { name: 'AI/ML Engineering', mono: 'Ai' },
      { name: 'Generative AI', mono: 'Gn' },
      { name: 'AI Services', mono: 'As' },
      { name: 'Software Engineering', mono: 'Se' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['AI Document Summarizer', 'Complete ML Course – Udemy'],
  Java: ['B.Tech CSE, Amrita'],
  C: ['B.Tech CSE core curriculum'],
  SQL: ['Secure Voting System – PostgreSQL'],
  'Machine Learning': ['AI Document Summarizer', 'TATA GenAI – Forage', 'ML Course – Udemy'],
  'Data Preprocessing': ['AI Document Summarizer', 'SYNCpedia AI/ML Trainee'],
  NumPy: ['AI/ML Developer Trainee – SYNCpedia'],
  Pandas: ['AI/ML Developer Trainee – SYNCpedia'],
  React: ['Secure Voting System', 'Front-End Intern – SYNCpedia'],
  'Node.js': ['Secure Voting System'],
  'REST APIs': ['Secure Voting System'],
  MySQL: ['Full-stack coursework'],
  PostgreSQL: ['Secure Voting System'],
  Git: ['SYNCpedia internship'],
  'VS Code': ['Primary dev environment'],
  'Power BI': ['TATA GenAI Powered Data Analytics – Forage'],
  'Generative AI': ['TATA GenAI – Forage', 'SYNCpedia AI/ML Trainee'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020 – 2021',
    synopsis: 'SSC at Narayana School — the beginning of the academic journey.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Start',
        description: 'SSC (State Board) at Narayana School — completing secondary education.',
        tags: ['SSC', 'State Board'],
        runtime: '2020 – 2021',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Intermediate',
    period: '2021 – 2023',
    synopsis: 'Intermediate studies at Tirumala Junior Kalasala — building the science foundation.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Scholar',
        description: 'Intermediate (State Board) at Tirumala Junior Kalasala, Andhra Pradesh.',
        tags: ['Intermediate', 'State Board'],
        runtime: '2021 – 2023',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Enter: Computer Science',
    period: '2023 – Present',
    synopsis: 'B.Tech in Computer Science and Engineering at Amrita Vishwa Vidyapeetham, Coimbatore.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Computer Science and Engineering at Amrita Vishwa Vidyapeetham, Coimbatore.',
        tags: ['B.Tech', 'CSE', 'Amrita'],
        runtime: '2023 – 2027',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Leader',
        description: 'NSS Volunteer and Department Event Organizer at Amrita — serving the community and driving events.',
        tags: ['NSS', 'Leadership', 'Events'],
        runtime: 'Ongoing',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'First Industry Steps',
    period: '2025 – 2026',
    synopsis: 'From front-end intern to AI/ML Developer Trainee at SYNCpedia Technologies.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Frontend Intern',
        description: 'Front-End Developer Intern at SYNCpedia Technologies — building responsive UIs with HTML, CSS, and JavaScript.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
        runtime: 'May – Jul 2025',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'The AI Trainee',
        description: 'AI/ML Developer Trainee at SYNCpedia Technologies — AI/ML applications, data processing, and model integration.',
        tags: ['AI/ML', 'Python', 'Model Integration'],
        runtime: 'Jul 2025 – Aug 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'Building Real Products',
    period: '2025 – 2026',
    synopsis: 'Two originals — an AI document summarizer and a secure electronic voting system.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The AI Builder',
        description: 'AI Document Summarizer — LLM-based summarization for TXT, PDF, and DOCX files via Gradio.',
        tags: ['Python', 'LLM', 'Gradio', 'NLP'],
        runtime: '2025',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'The Architect',
        description: 'Secure Transparent Electronic Voting System — multi-role platform with encrypted votes and audit logging.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
        runtime: '2025',
        palette: ocean,
      },
    ],
  },
  {
    number: 6,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Exploring the next frontier — AI, agentic systems, and full-stack automation.',
    episodes: [
      {
        code: 'S06 E01',
        title: 'The Next Chapter',
        description: 'Deepening expertise in AI, Agentic Systems, Full-Stack Development, and Data Automation.',
        tags: ['Generative AI', 'Agentic Systems', 'Data Automation'],
        runtime: 'In production',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Python', detail: 'AI/ML & full-stack development', palette: amber },
  { label: 'The AI Original', title: 'AI Document Summarizer', detail: 'LLM-powered • TXT, PDF, DOCX', palette: crimson },
  { label: 'The System Build', title: 'Voting System', detail: 'Multi-role • Encrypted • Audited', palette: ocean },
  { label: 'AI/ML Work', title: 'SYNCpedia Trainee', detail: 'Model dev & data processing', palette: violet },
  { label: 'Frontend work', title: 'SYNCpedia Intern', detail: 'HTML, CSS, JS — 2 months', palette: jade },
  { label: 'AI certification', title: 'TATA GenAI Analytics', detail: 'Forage program', palette: amber },
  { label: 'ML certification', title: 'Complete ML Course', detail: 'Udemy — Python & ML', palette: crimson },
  { label: 'Finance program', title: 'Investment Banking', detail: 'Finlatics Analyst Program', palette: ocean },
  { label: 'Education', title: 'Amrita Vishwa Vidyapeetham', detail: 'B.Tech CSE — 2023 to 2027', palette: violet },
  { label: 'Current focus', title: 'Generative AI', detail: 'with Agentic Systems & Automation', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Amrita Vishwa Vidyapeetham, Coimbatore', '2023 – 2027'],
    chips: ['Computer Science'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['Java, C, SQL · React, Node.js, REST APIs', 'NumPy, Pandas, Machine Learning · Power BI, Git'],
    chips: ['Python', 'React', 'Node.js', 'ML', 'Pandas'],
  },
  {
    kicker: 'Experience',
    title: 'SYNCpedia Technologies',
    lines: [
      'Front-End Developer Intern · May – Jul 2025',
      'AI/ML Developer Trainee · Jul 2025 – Aug 2026',
      'HTML, CSS, JS · AI/ML Integration · Data Processing',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Two Originals',
    lines: [
      'AI Document Summarizer — LLM-powered, TXT / PDF / DOCX',
      'Secure Voting System — Multi-role, encrypted, audit-logged',
    ],
  },
  {
    kicker: 'Certifications',
    title: '4 Certifications',
    lines: ['Complete ML Course — Udemy', 'TATA GenAI Analytics — Forage', 'Investment Banking — Finlatics'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['AI · Agentic Systems · Full-Stack Development · Data Automation'],
  },
];

export type ProfileId = 'prakash' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'prakash',
    name: 'Prakash',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
