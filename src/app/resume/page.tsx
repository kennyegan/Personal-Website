'use client';

import { motion } from 'framer-motion';
import { 
  Download, 
  MapPin, 
  Mail, 
  Linkedin, 
  Github, 
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Brain,
  Star
} from 'lucide-react';
import ResumeButton, { ResumePreview } from '@/components/ResumeButton';
//TODO this is a placeholder for the resume page. I need to add all my actaull experience and education
const experience = [
  {
    title: 'Senior AI Research Engineer',
    company: 'TechVision AI',
    location: 'San Francisco, CA',
    duration: '2022 - Present',
    description: 'Leading research and development of cutting-edge AI models for computer vision and natural language processing applications.',
    achievements: [
      'Developed novel neural architecture that improved model accuracy by 25%',
      'Led a team of 8 researchers on breakthrough federated learning project',
      'Published 3 papers in top-tier conferences (ICML, NeurIPS, ICLR)',
      'Filed 2 patents for innovative AI optimization techniques'
    ],
    skills: ['PyTorch', 'TensorFlow', 'Python', 'CUDA', 'MLOps', 'Docker']
  },
  {
    title: 'Full Stack Engineer & Startup Co-founder',
    company: 'NeuralSync Inc.',
    location: 'Palo Alto, CA',
    duration: '2020 - 2022',
    description: 'Co-founded and led technical development of AI-powered productivity platform, scaling from concept to 50k+ users.',
    achievements: [
      'Built scalable architecture handling 1M+ API requests daily',
      'Raised $2.1M in seed funding from top Silicon Valley VCs',
      'Grew user base to 50,000+ with 95% user satisfaction rate',
      'Led product development and technical hiring'
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis', 'TypeScript']
  },
  {
    title: 'Machine Learning Engineer',
    company: 'DataFlow Technologies',
    location: 'Seattle, WA',
    duration: '2019 - 2020',
    description: 'Developed and deployed ML models for real-time data processing and predictive analytics in financial markets.',
    achievements: [
      'Built real-time ML pipeline processing 100k+ transactions/second',
      'Improved prediction accuracy by 40% through novel ensemble methods',
      'Optimized model inference latency from 100ms to 15ms',
      'Mentored junior engineers and established ML best practices'
    ],
    skills: ['Scikit-learn', 'Apache Spark', 'Kafka', 'Python', 'SQL', 'Kubernetes']
  }
];

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Stanford University',
    location: 'Stanford, CA',
    duration: '2017 - 2019',
    gpa: '3.9/4.0',
    focus: 'Artificial Intelligence & Machine Learning',
    achievements: [
      'Thesis: "Quantum-Enhanced Neural Networks for Natural Language Processing"',
      'Research Assistant in Stanford AI Lab',
      'Teaching Assistant for CS229 (Machine Learning)',
      'Winner, Stanford AI Hackathon 2018'
    ]
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'UC Berkeley',
    location: 'Berkeley, CA',
    duration: '2013 - 2017',
    gpa: '3.8/4.0',
    focus: 'Computer Systems & Software Engineering',
    achievements: [
      'Magna Cum Laude graduate',
      'President, ACM Student Chapter',
      'Undergraduate Research in Computer Vision Lab',
      'Dean\'s List for 6 semesters'
    ]
  }
];

const skills = {
  'Programming Languages': ['Python', 'TypeScript', 'JavaScript', 'Rust', 'Go', 'C++', 'SQL'],
  'AI/ML Frameworks': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'OpenAI API'],
  'Web Technologies': ['React', 'Next.js', 'Node.js', 'GraphQL', 'REST APIs', 'WebSockets'],
  'Databases': ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Vector DBs'],
  'Cloud & DevOps': ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  'Blockchain': ['Solidity', 'Ethereum', 'Web3.js', 'IPFS', 'Smart Contracts']
};

const awards = [
  {
    title: 'AI Researcher of the Year',
    organization: 'Tech Innovation Awards',
    year: '2023',
    description: 'Recognized for groundbreaking work in quantum-enhanced machine learning'
  },
  {
    title: 'Best Paper Award',
    organization: 'International Conference on Machine Learning (ICML)',
    year: '2023',
    description: 'For paper on "Evolutionary Neural Architecture Search with Multi-Objective Optimization"'
  },
  {
    title: 'Forbes 30 Under 30',
    organization: 'Forbes Technology',
    year: '2022',
    description: 'Listed in Technology category for contributions to AI and entrepreneurship'
  },
  {
    title: 'Startup of the Year',
    organization: 'Silicon Valley Tech Awards',
    year: '2021',
    description: 'NeuralSync Inc. recognized for innovation in AI-powered productivity tools'
  }
];

export default function ResumePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-cyber">
            Resume
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI Researcher, Software Engineer, and Startup Founder with 5+ years of experience 
            building innovative technology solutions and advancing the field of artificial intelligence.
          </p>
          <ResumeButton variant="primary" size="lg" />
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ResumePreview />
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 space-y-8"
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="p-3 bg-gradient-neon rounded-lg">
              <Briefcase size={24} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gradient-cyber">Professional Experience</h2>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-neon-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    <div className="text-xl text-gradient-blue">{job.company}</div>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{job.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {job.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-300">
                        <Star size={16} className="text-neon-blue-400 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-neon-blue-500/20 text-neon-blue-400 border border-neon-blue-500/50 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 space-y-8"
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="p-3 bg-gradient-neon rounded-lg">
              <GraduationCap size={24} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gradient-cyber">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-neon-blue-500/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <div className="text-lg text-gradient-blue">{edu.school}</div>
                  <div className="flex items-center justify-between text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                  <div className="text-gray-300">
                    <div className="font-medium">GPA: {edu.gpa}</div>
                    <div className="text-sm">Focus: {edu.focus}</div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="text-lg font-semibold text-white">Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-300 text-sm">
                        <Star size={14} className="text-neon-blue-400 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 space-y-8"
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="p-3 bg-gradient-neon rounded-lg">
              <Code size={24} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gradient-cyber">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/10 space-y-4"
              >
                <h3 className="text-xl font-bold text-gradient-blue">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 text-gray-300 border border-white/20 rounded-lg text-sm font-medium hover:bg-white/20 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 space-y-8"
        >
          <div className="flex items-center space-x-3 mb-12">
            <div className="p-3 bg-gradient-neon rounded-lg">
              <Award size={24} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gradient-cyber">Awards & Recognition</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{award.title}</h3>
                    <div className="text-lg text-gradient-blue">{award.organization}</div>
                  </div>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 rounded-full text-sm font-medium">
                    {award.year}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-20 border-t border-white/10"
        >
          <div className="glass rounded-3xl p-12 border border-white/10 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyber">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to build something amazing? I'm always interested in discussing 
                new opportunities, innovative projects, and potential collaborations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:hello@kenny.dev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-neon rounded-lg text-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue-500/25 transition-all duration-200 btn-futuristic flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/kenny-chen"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-lg border border-white/20 hover:border-neon-blue-500/50 text-white hover:bg-white/10 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}