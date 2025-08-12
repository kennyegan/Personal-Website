export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'AI/ML' | 'Web Development' | 'Mobile' | 'Blockchain' | 'Open Source';
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: 'fincept-ai',
    title: 'Fincept AI',
    description: 'Next-generation financial analysis platform powered by advanced machine learning algorithms.',
    longDescription: 'Fincept AI is a comprehensive financial analysis platform that leverages cutting-edge machine learning algorithms to provide real-time market insights, risk assessment, and predictive analytics. The platform processes millions of data points from global financial markets to deliver actionable intelligence for institutional investors and hedge funds.',
    image: '/images/fincept-placeholder.png',
    techStack: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    githubUrl: 'https://github.com/kenny/fincept-ai',
    liveUrl: 'https://fincept.ai',
    category: 'AI/ML',
    featured: true,
    year: 2024
  },
  {
    id: 'neural-dream',
    title: 'Neural Dream Visualizer',
    description: 'Deep learning model that generates artistic visualizations from neural network interpretations.',
    longDescription: 'Neural Dream Visualizer is an innovative deep learning application that transforms neural network activations into stunning artistic visualizations. Using advanced GANs and style transfer techniques, it creates unique digital art pieces that represent the internal workings of AI models.',
    image: '/images/neural-dream-placeholder.png',
    techStack: ['PyTorch', 'Python', 'FastAPI', 'Vue.js', 'Redis', 'CUDA'],
    githubUrl: 'https://github.com/kenny/neural-dream',
    liveUrl: 'https://neuraldream.dev',
    category: 'AI/ML',
    featured: true,
    year: 2023
  },
  {
    id: 'quantum-trader',
    title: 'Quantum Trading Bot',
    description: 'Quantum-inspired algorithmic trading system with advanced risk management.',
    longDescription: 'Quantum Trading Bot employs quantum-inspired optimization algorithms to execute high-frequency trading strategies across multiple cryptocurrency exchanges. The system features sophisticated risk management, portfolio optimization, and real-time market analysis capabilities.',
    image: '/images/quantum-trader-placeholder.png',
    techStack: ['Rust', 'Python', 'WebAssembly', 'React', 'MongoDB', 'Kubernetes'],
    githubUrl: 'https://github.com/kenny/quantum-trader',
    category: 'Blockchain',
    featured: true,
    year: 2023
  },
  {
    id: 'mindbridge-app',
    title: 'MindBridge',
    description: 'Mental health companion app using NLP to provide personalized support and insights.',
    longDescription: 'MindBridge is a mental health companion application that uses natural language processing to analyze user conversations and provide personalized mental health support. The app features mood tracking, cognitive behavioral therapy exercises, and AI-powered insights to help users maintain their mental wellbeing.',
    image: '/images/mindbridge-placeholder.png',
    techStack: ['React Native', 'TypeScript', 'Python', 'NLP', 'Firebase', 'TensorFlow'],
    githubUrl: 'https://github.com/kenny/mindbridge',
    liveUrl: 'https://mindbridge.app',
    category: 'Mobile',
    featured: false,
    year: 2023
  },
  {
    id: 'code-genesis',
    title: 'Code Genesis',
    description: 'AI-powered code generation platform that understands context and generates production-ready code.',
    longDescription: 'Code Genesis is an advanced AI-powered development tool that generates production-ready code from natural language descriptions. It understands project context, follows best practices, and integrates seamlessly with existing codebases to accelerate development workflows.',
    image: '/images/code-genesis-placeholder.png',
    techStack: ['GPT-4', 'Python', 'Next.js', 'Prisma', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/kenny/code-genesis',
    category: 'AI/ML',
    featured: false,
    year: 2024
  },
  {
    id: 'decentragram',
    title: 'DecentraGram',
    description: 'Decentralized social media platform built on blockchain with privacy-first design.',
    longDescription: 'DecentraGram is a revolutionary decentralized social media platform that puts users in control of their data. Built on blockchain technology, it features end-to-end encryption, tokenized content creation, and a governance model that gives users a voice in platform decisions.',
    image: '/images/decentragram-placeholder.png',
    techStack: ['Solidity', 'Ethereum', 'IPFS', 'React', 'Web3.js', 'MetaMask'],
    githubUrl: 'https://github.com/kenny/decentragram',
    category: 'Blockchain',
    featured: false,
    year: 2022
  }
];

export const featuredProjects = projects.filter(project => project.featured);

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};