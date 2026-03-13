export type TimelineCategory =
  | 'Research'
  | 'Publication'
  | 'Career'
  | 'Project'
  | 'Milestone'
  | 'Stealth'
  | 'Aerospace'
  | 'Award'
  | 'Founder';

export interface CurrentFocus {
  eyebrow: string;
  title: string;
  summary: string;
  items: string[];
}

export interface TimelineItem {
  id: string;
  date: string;
  order: number;
  category: TimelineCategory;
  title: string;
  description: string;
  details: string;
  link?: {
    label: string;
    href: string;
  };
  pulseNode?: boolean;
}

export const currentFocus: CurrentFocus = {
  eyebrow: 'NOW',
  title: 'Current Focus',
  summary:
    'Building embedded satellite systems, advancing AI research, and quietly building a few things not ready to share yet.',
  items: [
    'PocketQube imaging & downlink',
    'Speech enhancement & alignment research',
    'Technical tools & data-driven systems',
  ],
};

export const timelineItems: TimelineItem[] = [
  {
    id: '2026-upe',
    date: '2026',
    order: 1,
    category: 'Milestone',
    title: 'Joined Upsilon Pi Epsilon (International Computing Honor Society)',
    description:
      'Elected to the international honor society for the computing and information disciplines.',
    details:
      'Elected to Upsilon Pi Epsilon, the international honor society for the computing and information disciplines, recognizing academic achievement and contributions in computer science.',
    pulseNode: true,
  },
  {
    id: '2026-ssm-lab126',
    date: '2026',
    order: 2,
    category: 'Research',
    title: 'SSM Speech Enhancement Research Presented to Amazon Lab126',
    description:
      'Presented architecture design, training setup, and early evaluation results for state-space-model speech enhancement research.',
    details:
      'Presented architecture design, training setup, and early evaluation results for state-space model based speech enhancement research focused on difficult sensing environments and biosignal-derived audio. Work is part of ongoing research and cannot yet be publicly referenced while awaiting formal submission.',
  },
  {
    id: '2026-pocketqube-mission-work',
    date: '2026',
    order: 3,
    category: 'Aerospace',
    title: 'Expanded PocketQube mission engineering work',
    description:
      'Continued development work on embedded systems and mission-level engineering for the Wentworth PocketQube satellite program.',
    details:
      'Continued development work on embedded systems and mission-level engineering for the Wentworth PocketQube satellite program, contributing to spacecraft subsystem development and flight-adjacent systems engineering.',
  },
  {
    id: '2026-ai-research-assistant',
    date: '2026',
    order: 4,
    category: 'Career',
    title: 'AI Research Assistant',
    description:
      'Began contributing to machine learning research focused on speech and biosignal understanding.',
    details:
      'Began working as an AI Research Assistant contributing to machine learning research focused on speech and biosignal understanding. Work involves designing model architectures, developing training pipelines, and evaluating machine learning systems for challenging sensing environments.',
  },
  {
    id: '2025-ctg-ml-intern',
    date: '2025',
    order: 1,
    category: 'Career',
    title: 'Software Engineer Intern (Machine Learning Focus) — Capital Technology Group',
    description:
      'Designed and deployed machine learning systems and data pipelines for large government and financial datasets.',
    details:
      'Designed and deployed machine learning systems and data pipelines analyzing large government and financial datasets. Work included anomaly detection models, predictive analytics, and infrastructure supporting complex regulatory environments.',
    link: {
      label: 'Experience',
      href: '#experience',
    },
  },
  {
    id: '2025-sycophancy',
    date: '2025',
    order: 2,
    category: 'Research',
    title: 'Mitigating Sycophancy in Large Language Models (In Progress)',
    description:
      'Initiated research into mitigation strategies for sycophantic behavior in modern language models.',
    details:
      'Initiated research investigating mechanisms and mitigation strategies for sycophantic behavior in modern language models. The project focuses on interpretability, evaluation benchmarks, and alignment techniques. Work is currently ongoing and cannot yet be publicly referenced while awaiting submission.',
  },
  {
    id: '2025-ssm-speech-enhancement',
    date: '2025',
    order: 3,
    category: 'Research',
    title: 'State Space Models for Speech Enhancement (In Progress)',
    description:
      'Began research exploring state-space architectures for speech enhancement in challenging sensing modalities.',
    details:
      'Began research exploring state-space architectures for speech enhancement using challenging sensing modalities. Work focuses on architecture design, training strategies, and system-level evaluation. Details cannot yet be publicly referenced while awaiting submission.',
  },
  {
    id: '2025-space-elevator',
    date: '2025',
    order: 4,
    category: 'Research',
    title: 'Space Elevator Systems Research (Early Investigation)',
    description:
      'Began exploratory research into the engineering feasibility of tether-based space infrastructure.',
    details:
      'Began exploratory research investigating the engineering feasibility of large-scale tether-based space infrastructure, including early system modeling and conceptual architecture exploration.',
  },
  {
    id: '2025-financial-infra-stealth',
    date: '2025',
    order: 5,
    category: 'Stealth',
    title: 'Large-Scale Financial Infrastructure System (Stealth)',
    description:
      'Initiated development of a private technical system focused on financial infrastructure and data systems.',
    details:
      'Initiated development of a private technical system focused on financial infrastructure and data systems. The project remains in private development.',
  },
  {
    id: '2024-wentworth-pocketqube',
    date: '2024',
    order: 1,
    category: 'Project',
    title: 'Joined Wentworth PocketQube Research Team',
    description:
      'Began contributing to embedded systems engineering for the Wentworth PocketQube satellite mission.',
    details:
      'Began contributing to embedded systems engineering for the Wentworth PocketQube satellite mission, working on spacecraft subsystems and mission-level technical design.',
  },
  {
    id: '2024-mpa-scholarship',
    date: '2024',
    order: 2,
    category: 'Award',
    title: 'MPA Scholarship — Massachusetts Police Association',
    description:
      'Awarded the Massachusetts Police Association scholarship for academic performance and leadership.',
    details:
      'Awarded the Massachusetts Police Association scholarship recognizing academic performance and leadership.',
  },
  {
    id: '2024-wit-it-specialist',
    date: '2024',
    order: 3,
    category: 'Career',
    title: 'IT Specialist — Wentworth Institute of Technology (Part-Time)',
    description:
      'Worked on technical infrastructure, hardware support, and systems operations across campus environments.',
    details:
      'Worked on technical infrastructure, hardware support, and systems operations across campus computing environments.',
  },
  {
    id: '2024-success-studio-tutor',
    date: '2024',
    order: 4,
    category: 'Career',
    title: 'Computer Science & Mathematics Tutor — Success Studio (Part-Time)',
    description:
      'Provided tutoring support in computer science and mathematics for programming and quantitative problem-solving.',
    details:
      'Provided tutoring support in computer science and mathematics, helping students build programming fundamentals and quantitative problem-solving skills.',
  },
  {
    id: '2024-private-systems',
    date: '2024',
    order: 5,
    category: 'Stealth',
    title: 'Private Technical Systems Under Development',
    description:
      'Several software and infrastructure systems are currently under development.',
    details:
      'Several software and infrastructure systems currently under development that will be released publicly when ready.',
  },
  {
    id: '2023-bridgewater-raynham',
    date: '2023',
    order: 2,
    category: 'Milestone',
    title: 'Graduated Highschool',
    description:
      'Graduated from Bridgewater-Raynham High School.',
    details:
      'Graduated from Bridgewater-Raynham High School before beginning undergraduate studies in computer science.',
  },
  {
    id: '2023-bachelors',
    date: '2023',
    order: 1,
    category: 'Milestone',
    title: "Started Bachelor’s Degree in Computer Science",
    description:
      'Began undergraduate studies in Computer Science at Wentworth Institute of Technology.',
    details:
      'Began undergraduate studies in Computer Science with minors in Applied Mathematics and Data Science at Wentworth Institute of Technology.',
  },
  {
    id: '2022-strive-technology-group',
    date: '2022',
    order: 1,
    category: 'Founder',
    title: 'Founded Strive Technology Group — strivetg.com',
    description:
      'Launched an early-stage technical venture focused on software systems and technical infrastructure.',
    details:
      'Launched Strive Technology Group, an early-stage technical venture focused on building software systems and technical infrastructure. Initial work included software development, engineering experimentation, and early technical product development.',
    link: {
      label: 'Visit site',
      href: 'https://strivetg.com',
    },
  },
];
