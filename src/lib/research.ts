export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  journal: string;
  year: number;
  status: 'Published' | 'Under Review' | 'Preprint' | 'In Progress';
  tags: string[];
  pdfUrl?: string;
  arxivUrl?: string;
  githubUrl?: string;
  citationCount?: number;
  featured: boolean;
}

export const researchPapers: ResearchPaper[] = [
  {
    id: 'quantum-nlp-2024',
    title: 'Quantum-Enhanced Natural Language Processing: A Novel Approach to Semantic Understanding',
    abstract: 'We present a groundbreaking framework that leverages quantum computing principles to enhance natural language processing tasks. Our approach demonstrates significant improvements in semantic understanding, achieving state-of-the-art results on multiple benchmarks while reducing computational complexity by 40%. The quantum-classical hybrid model shows particular promise for handling ambiguous contexts and multi-layered meaning interpretation.',
    authors: ['Kenny Egan', 'Dr. Sarah Mitchell', 'Prof. David Wang'],
    journal: 'Nature Machine Intelligence',
    year: 2024,
    status: 'Under Review',
    tags: ['Quantum Computing', 'NLP', 'Machine Learning', 'Semantic Analysis'],
    arxivUrl: 'https://arxiv.org/abs/2024.quantum-nlp',
    githubUrl: 'https://github.com/kenny/quantum-nlp',
    featured: true
  },
  {
    id: 'federated-ai-privacy-2023',
    title: 'Privacy-Preserving Federated Learning for Large-Scale AI Systems',
    abstract: 'This paper introduces a novel federated learning framework that maintains strict privacy guarantees while enabling collaborative AI model training across distributed datasets. Our differential privacy-enhanced approach achieves comparable accuracy to centralized training while providing mathematical privacy guarantees. We demonstrate the framework\'s effectiveness on healthcare and financial datasets.',
    authors: ['Kenny Egan', 'Dr. Elena Rodriguez', 'Prof. Michael Kim'],
    journal: 'IEEE Transactions on Information Forensics and Security',
    year: 2023,
    status: 'Published',
    tags: ['Federated Learning', 'Privacy', 'Differential Privacy', 'Distributed Systems'],
    githubUrl: 'https://github.com/kenny/federated-privacy',
    citationCount: 127,
    featured: true
  },
  {
    id: 'neural-architecture-search-2023',
    title: 'Evolutionary Neural Architecture Search with Multi-Objective Optimization',
    abstract: 'We propose an evolutionary approach to neural architecture search that simultaneously optimizes for accuracy, efficiency, and robustness. Our method discovers novel architectures that outperform manually designed networks while maintaining computational efficiency. The discovered architectures show improved performance across diverse tasks including computer vision, natural language processing, and speech recognition.',
    authors: ['Kenny Egan', 'Dr. Lisa Thompson'],
    journal: 'Proceedings of ICML 2023',
    year: 2023,
    status: 'Published',
    tags: ['Neural Architecture Search', 'AutoML', 'Evolutionary Algorithms', 'Multi-Objective Optimization'],
    arxivUrl: 'https://arxiv.org/abs/2023.neural-nas',
    githubUrl: 'https://github.com/kenny/evolutionary-nas',
    citationCount: 89,
    featured: true
  },
  {
    id: 'blockchain-ai-consensus-2024',
    title: 'AI-Driven Consensus Mechanisms for Next-Generation Blockchain Networks',
    abstract: 'This work presents a novel consensus mechanism that leverages artificial intelligence to improve blockchain scalability and energy efficiency. Our AI-driven approach adapts the consensus protocol in real-time based on network conditions, achieving 10x improvement in transaction throughput while reducing energy consumption by 60%. The system maintains security guarantees while providing unprecedented scalability.',
    authors: ['Kenny Egan', 'Dr. Alex Johnson', 'Prof. Maria Garcia'],
    journal: 'ACM Transactions on Computer Systems',
    year: 2024,
    status: 'Preprint',
    tags: ['Blockchain', 'Consensus Algorithms', 'AI', 'Scalability', 'Energy Efficiency'],
    arxivUrl: 'https://arxiv.org/abs/2024.ai-blockchain-consensus',
    githubUrl: 'https://github.com/kenny/ai-consensus',
    featured: false
  },
  {
    id: 'explainable-ai-healthcare-2023',
    title: 'Explainable AI for Medical Diagnosis: Building Trust in Clinical Decision Support',
    abstract: 'We develop an explainable AI framework specifically designed for medical diagnosis applications. Our approach provides interpretable explanations for AI-driven diagnoses, enabling healthcare professionals to understand and trust AI recommendations. Clinical trials demonstrate improved diagnostic accuracy and increased physician confidence when using our explainable AI system.',
    authors: ['Kenny Egan', 'Dr. Robert Stevens', 'Dr. Jennifer Liu'],
    journal: 'Nature Digital Medicine',
    year: 2023,
    status: 'Published',
    tags: ['Explainable AI', 'Healthcare', 'Medical Diagnosis', 'Clinical Decision Support'],
    citationCount: 156,
    featured: false
  },
  {
    id: 'quantum-ml-optimization-2024',
    title: 'Quantum Machine Learning for Optimization Problems in Logistics',
    abstract: 'This research explores the application of quantum machine learning algorithms to solve complex optimization problems in logistics and supply chain management. Our quantum-enhanced approach demonstrates exponential speedup for certain NP-hard optimization problems, with practical applications in route optimization, inventory management, and resource allocation.',
    authors: ['Kenny Egan', 'Dr. Thomas Anderson'],
    journal: 'Quantum Science and Technology',
    year: 2024,
    status: 'In Progress',
    tags: ['Quantum Machine Learning', 'Optimization', 'Logistics', 'Supply Chain'],
    featured: false
  }
];

export const featuredPapers = researchPapers.filter(paper => paper.featured);

export const getPapersByStatus = (status: ResearchPaper['status']) => {
  return researchPapers.filter(paper => paper.status === status);
};

export const getPapersByTag = (tag: string) => {
  return researchPapers.filter(paper => paper.tags.includes(tag));
};

export const getPaperById = (id: string) => {
  return researchPapers.find(paper => paper.id === id);
};

export const getAllTags = () => {
  const tagSet = new Set<string>();
  researchPapers.forEach(paper => {
    paper.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};
