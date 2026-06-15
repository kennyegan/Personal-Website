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
    'Conducting embedded AI and multimodal systems research through Amazon Lab126 while advancing independent technical initiatives across machine learning, intelligent systems, audio interfaces, and scalable data-driven infrastructure. Current work focuses on agentic voice technologies, adaptive human-device interaction, and next-generation AI systems designed for real-world deployment.',
  items: [
    'Embedded AI & Amazon Lab126 R&D',
    'Multimodal systems and applied ML research',
    'Private ventures and infrastructure development',
  ],
};

export const timelineItems: TimelineItem[] = [
  {
    id: '2026-amazon-lab126',
    date: '2026',
    order: 0,
    category: 'Career',
    title: 'AI R&D — Amazon Lab126',
    description:
      'Working with Amazon Lab126 to conduct embedded AI and multimodal systems research.',
    link: {
      label: 'View Experience',
      href: '#experience-0',
    },
    pulseNode: true,
  },
  {
    id: '2026-upe',
    date: '2026',
    order: 1,
    category: 'Milestone',
    title: 'Joined Upsilon Pi Epsilon (International Computing Honor Society)',
    description:
      'Elected to the international honor society for the computing and information disciplines.',
    },
  {
    id: '2026-pocketqube-mission-work',
    date: '2026',
    order: 3,
    category: 'Aerospace',
    title: 'Expanded PocketQube Mission Engineering Work',
    description:
      'Continued development work on embedded systems and mission-level engineering for the Wentworth PocketQube satellite program.',
    },
  {
    id: '2026-ai-research-assistant',
    date: '2026',
    order: 4,
    category: 'Career',
    title: 'AI Research Assistant',
    description:
      'Began contributing to machine learning research focused on speech and biosignal understanding.',
    link: {
      label: 'View Experience',
      href: '#experience-1',
    },
  },
  {
    id: '2025-ctg-ml-intern',
    date: '2025',
    order: 1,
    category: 'Career',
    title: 'Software Engineer Intern (Machine Learning Focus) — Capital Technology Group',
    description:
      'Designed and deployed machine learning systems and data pipelines for large government and financial datasets.',
    link: {
      label: 'View Experience',
      href: '#experience-2',
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
    },
  {
    id: '2025-space-elevator',
    date: '2025',
    order: 3,
    category: 'Research',
    title: 'Space Elevator Systems Research (Early Investigation)',
    description:
      'Started exploratory research investigating the engineering feasibility of tether-based space infrastructure and next-generation orbital systems.',
    },
  {
    id: '2025-financial-infra-stealth',
    date: '2025',
    order: 4,
    category: 'Stealth',
    title: 'Started Stealth Venture',
    description:
      'Started a stealth venture currently under private development.',
    },
  {
    id: '2024-wentworth-pocketqube',
    date: '2024',
    order: 1,
    category: 'Project',
    title: 'Joined Wentworth PocketQube Research Team',
    description:
      'Began contributing to embedded systems engineering for the Wentworth PocketQube satellite mission.',
    },
  {
    id: '2024-mpa-scholarship',
    date: '2024',
    order: 2,
    category: 'Award',
    title: 'MPA Scholarship — Massachusetts Police Association',
    description:
      'Awarded the Massachusetts Police Association scholarship recognizing academic achievement and leadership.',
    },
  {
    id: '2024-wit-it-specialist',
    date: '2024',
    order: 3,
    category: 'Career',
    title: 'IT Specialist — Wentworth Institute of Technology (Part-Time)',
    description:
      'Worked on technical infrastructure, hardware support, and systems operations across campus environments.',
    link: {
      label: 'View Experience',
      href: '#experience-4',
    },
  },
  {
    id: '2024-success-studio-tutor',
    date: '2024',
    order: 4,
    category: 'Career',
    title: 'Computer Science & Mathematics Tutor — Success Studio, Wentworth Institute of Technology (Part-Time)',
    description:
      'Provided tutoring support in computer science and mathematics for programming and quantitative problem-solving.',
    link: {
      label: 'View Experience',
      href: '#experience-3',
    },
  },
  {
    id: '2024-private-systems',
    date: '2024',
    order: 5,
    category: 'Stealth',
    title: 'Private Technical Systems Under Development',
    description:
      'Several software and infrastructure systems are currently under development.',
    },
  {
    id: '2023-bachelors',
    date: '2023',
    order: 1,
    category: 'Milestone',
    title: "Started Bachelor’s Degree in Computer Science",
    description:
      'Began undergraduate studies in Computer Science at Wentworth Institute of Technology.',
    },
  {
    id: '2022-strive-technology-group',
    date: '2022',
    order: 1,
    category: 'Founder',
    title: 'Founded Strive Technology Group — strivetg.com',
    description:
      'Launched an early-stage technical venture focused on software systems and technical infrastructure.',
    link: {
      label: 'Visit site',
      href: 'https://strivetg.com',
    },
  },
];
