export type TimelineCategory =
  | 'Research'
  | 'Publication'
  | 'Career'
  | 'Product'
  | 'Aerospace'
  | 'Engineering';

export interface CurrentFocus {
  eyebrow: string;
  title: string;
  summary: string;
  items: string[];
}

export interface TimelineItem {
  date: string;
  category: TimelineCategory;
  title: string;
  description: string;
}

export const currentFocus: CurrentFocus = {
  eyebrow: 'Now',
  title: 'Current Focus',
  summary:
    'Building embedded satellite systems, advancing AI research, and developing technical software products that connect research with real-world deployment.',
  items: [
    'PocketQube imaging and downlink systems',
    'Speech enhancement and alignment research',
    'Technical tools and data-driven systems',
  ],
};

export const timelineItems: TimelineItem[] = [
  {
    date: '2026',
    category: 'Research',
    title: 'Presented SSM speech enhancement research to Amazon Lab126',
    description:
      'Presented model architecture, training setup, and evaluation results for body-conducted speech enhancement research.',
  },
  {
    date: '2026',
    category: 'Publication',
    title: 'Published gravity-gradient satellite paper',
    description:
      'First-author aerospace paper on hybrid attitude control concepts for small satellite and PocketQube-class missions.',
  },
  {
    date: '2025',
    category: 'Aerospace',
    title: 'Expanded PocketQube mission engineering work',
    description:
      'Pushed further into flight-adjacent system design with imaging, downlink, and mission-level thinking for compact satellites.',
  },
  {
    date: '2025',
    category: 'Research',
    title: 'Started sycophancy alignment research',
    description:
      'Began studying how large language models respond to agreement-seeking prompts and how to benchmark that behavior more rigorously.',
  },
  {
    date: '2025',
    category: 'Product',
    title: 'Built Financial Earth visualization',
    description:
      'Developed a globe-based visualization system for exploring large-scale financial flows and economic relationships.',
  },
  {
    date: '2024',
    category: 'Career',
    title: 'Joined Capital Technology Group as a Software Development Engineer Intern',
    description:
      'Worked on enterprise production systems, software infrastructure, and collaborative engineering workflows in a professional environment.',
  },
  {
    date: '2024',
    category: 'Engineering',
    title: 'Developed a snowboard wearable system',
    description:
      'Built an IoT wearable concept for snowboard performance analysis, combining sensing, hardware integration, and data interpretation.',
  },
  {
    date: '2023',
    category: 'Product',
    title: 'Built DataDriver for automated literature review workflows',
    description:
      'Created a technical tool to help structure literature review and research analysis processes more efficiently.',
  },
  {
    date: '2023',
    category: 'Research',
    title: 'Scaled financial sentiment analysis across 2+ million headlines',
    description:
      'Built a research workflow for market prediction experiments using large-scale news sentiment data and analytics.',
  },
];
