// ================================
// PERSONAL INFORMATION CONFIG
// ================================
// Update this file with your personal information to customize the entire website

const siteUrl = 'https://kennethegan.com';
const resumeUrl: string | null = null;

export const personalInfo = {
  // Basic Information
  name: "Kenneth Egan",
  title: "AI Researcher & Engineer",
  bio: "SDE Intern at Capital Technology Group, passionate about building innovative AI solutions, data analysis, and full-stack development. Currently pursuing excellence in machine learning and creating impactful technology products.",
  location: "United States",
  siteUrl,
  
  // Contact Information
  email: "kenegan2005@gmail.com",
  
  // Social Media & Professional Links
  social: {
    github: "https://github.com/kennyegan",
    linkedin: "https://www.linkedin.com/in/kenneth-egan2005/",
    twitter: "https://twitter.com/kennyegan", // Update if you have one
    website: siteUrl,
    scholar: "https://scholar.google.com/citations?user=kenny-egan", // Update if you have one
    calendly: "https://calendly.com/kenny-egan/30min" // Update if you have one
  },
  
  // Professional Profile
  tagline: "Building the infrastructure layer for the next decade of AI.",
  elevator_pitch: "Software Development Engineer Intern and aspiring AI researcher passionate about data analysis, machine learning, and full-stack development.",
  
  // Current Status
  availability: {
    consulting: true,
    speaking: true,
    collaboration: true,
    job_seeking: true
  },
  
  // Skills & Expertise (based on your GitHub projects)
  skills: {
    core: [
      "Data Analysis & Visualization",
      "Machine Learning", 
      "Full Stack Development",
      "React & TypeScript",
      "Python & Jupyter",
      "IoT Development",
      "Financial Analysis",
      "Academic Research"
    ],
    programming_languages: [
      "Python", "TypeScript", "JavaScript", "SQL", "R"
    ],
    ai_ml: [
      "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"
    ],
    web_technologies: [
      "React", "Next.js", "Node.js", "TypeScript", "HTML/CSS"
    ],
    databases: [
      "SQL", "NoSQL", "Data Processing"
    ],
    tools: [
      "Git", "GitHub", "VS Code", "Jupyter", "Excel"
    ],
    specialized: [
      "Literature Review Automation", "Sentiment Analysis", "IoT Sensors", "Academic Performance Prediction"
    ]
  },

  // Professional Stats (based on your GitHub)
  stats: {
    years_experience: "2+",
    projects_completed: "7+",
    research_papers: "Multiple",
    github_repos: "7+"
  },

  // Resume Information
  resume: {
    url: resumeUrl,
    last_updated: "December 2024"
  },

  // Frontend feature flags
  ui: {
    showNovaAssistant: false,
  }
};

// Professional Experience Data (you'll need to update this with your actual experience)
export const experience = [
  {
    title: 'Software Development Engineer Intern',
    company: 'Capital Technology Group',
    location: 'United States',
    duration: '2024 - Present',
    description: 'Working on innovative software solutions and gaining hands-on experience in enterprise-level development practices.',
    achievements: [
      'Contributing to production software development projects',
      'Collaborating with senior developers on complex technical challenges',
      'Learning industry best practices for software engineering',
      'Participating in code reviews and agile development processes'
    ],
    skills: ['Software Development', 'Enterprise Systems', 'Team Collaboration', 'Agile Methodologies']
  },
  {
    title: 'Independent Developer & Researcher',
    company: 'Personal Projects',
    location: 'United States',
    duration: '2023 - Present',
    description: 'Developed multiple innovative projects focusing on data analysis, machine learning, and IoT applications.',
    achievements: [
      'Built DataDriver platform for automated literature review processes',
      'Analyzed sentiment of 2+ million financial news headlines for market prediction',
      'Developed IoT wearable system for snowboard performance analysis',
      'Created academic performance prediction models using machine learning'
    ],
    skills: ['Python', 'TypeScript', 'Machine Learning', 'IoT Development', 'Data Analysis']
  }
];

// Education Background (you'll need to update this with your actual education)
export const education = [
  {
    degree: 'Bachelor of Science in Computer Science', // Update with your actual degree
    school: 'Your University', // Update with your actual school
    location: 'United States',
    duration: '2022 - Present', // Update with your actual dates
    gpa: 'TBD', // Update with your actual GPA if you want to include it
    focus: 'Software Engineering & Data Science',
    achievements: [
      'Active in software development projects',
      'Focus on AI and machine learning applications',
      'Contributing to open-source projects',
      'Building practical solutions to real-world problems'
    ]
  }
];

// Awards & Recognition (update with your actual achievements)
export const awards = [
  {
    title: 'GitHub Project Showcase',
    organization: 'Personal Achievement',
    year: '2024',
    description: 'Developed multiple innovative projects including DataDriver, Market Sentiment Analysis, and IoT Wearables'
  },
  {
    title: 'SDE Internship',
    organization: 'Capital Technology Group',
    year: '2024',
    description: 'Selected for competitive software development internship position'
  }
];

// Project Categories (based on your GitHub repositories)
export const projectCategories = {
  'Data Science': ['Market-Sentiment-Analysis', 'Academic-Performance-Prediction'],
  'Web Development': ['DataDriver'],
  'IoT & Hardware': ['Snowboard-Wearable'],
  'Research Tools': ['DataDriver']
};

// Collaboration Types
export const collaborationTypes = [
  {
    title: 'Open Source Contribution',
    description: 'Contributing to open source projects and sharing knowledge with the community',
    examples: ['GitHub repositories', 'Code reviews', 'Documentation']
  },
  {
    title: 'Academic Collaboration',
    description: 'Working on research projects and academic initiatives',
    examples: ['Data analysis projects', 'Research papers', 'Study groups']
  },
  {
    title: 'Internship & Learning',
    description: 'Seeking mentorship opportunities and professional development',
    examples: ['Software engineering roles', 'AI/ML projects', 'Industry experience']
  },
  {
    title: 'Project Partnerships',
    description: 'Collaborating on innovative technology projects and startups',
    examples: ['Full-stack applications', 'Data science projects', 'IoT solutions']
  }
];

// Frequently Asked Questions
export const faqs = [
  {
    question: "What's the best way to contact you?",
    answer: `Email (${personalInfo.email}) is the best way to reach me. I typically respond within 24 hours.`
  },
  {
    question: "Are you available for internship opportunities?",
    answer: "Yes! I'm actively seeking software engineering and data science internship opportunities to grow my skills and contribute to meaningful projects."
  },
  {
    question: "Can you collaborate on open source projects?",
    answer: "Absolutely! I love contributing to open source projects and learning from the developer community. Feel free to reach out about collaboration opportunities."
  },
  {
    question: "Do you provide tutoring or mentoring?",
    answer: "I'm happy to help fellow students with programming, data analysis, or project development when time permits. Send me a message with details about what you're working on."
  }
];

// Page-specific content
export const pageContent = {
  home: {
    hero: {
      greeting: "Hello, I'm",
      subtitle: personalInfo.title,
      description: personalInfo.bio,
      cta_primary: "View My Projects",
      cta_secondary: "Download Resume"
    },
    sections: {
      projects: {
        title: "Featured Projects",
        description: "Showcasing innovative solutions in data science, web development, and IoT"
      },
      research: {
        title: "Research & Analysis", 
        description: "Exploring data-driven insights and machine learning applications"
      },
      contact: {
        title: "Let's Connect",
        description: "Interested in collaborating on projects or discussing opportunities? I'm always excited to connect with fellow developers and innovators."
      }
    }
  },
  
  projects: {
    title: "My Projects",
    description: "A collection of projects spanning data science, web development, IoT applications, and machine learning. Each project represents a step forward in solving real-world problems with technology."
  },
  
  research: {
    title: "Research & Analysis",
    description: "Exploring data science applications, machine learning models, and innovative solutions to complex problems through hands-on research and development."
  },
  
  resume: {
    title: "Resume",
    description: `${personalInfo.title} with ${personalInfo.stats.years_experience} years of experience in software development, data analysis, and innovative technology solutions.`
  },
  
  contact: {
    title: "Get In Touch",
    description: "I'm always excited to connect with fellow developers, researchers, and innovators. Whether you're looking to collaborate on a project, discuss opportunities, or just chat about technology, I'd love to hear from you."
  }
};
