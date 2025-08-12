'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';

interface ResumeButtonProps {
  variant?: 'download' | 'view' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ResumeButton({ 
  variant = 'download', 
  size = 'md',
  className = ''
}: ResumeButtonProps) {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume/Kenny-Chen-Resume.pdf';
    link.download = 'Kenny-Chen-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/resume/Kenny-Chen-Resume.pdf', '_blank');
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const baseClasses = `
    relative inline-flex items-center space-x-2 font-semibold rounded-lg
    transition-all duration-300 transform hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900
    ${sizeClasses[size]}
  `;

  if (variant === 'download') {
    return (
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          ${baseClasses}
          bg-gradient-neon text-white
          hover:shadow-lg hover:shadow-neon-blue-500/25
          focus:ring-neon-blue-500
          btn-futuristic
          ${className}
        `}
      >
        <Download size={iconSizes[size]} />
        <span>Download Resume</span>
      </motion.button>
    );
  }

  if (variant === 'view') {
    return (
      <motion.button
        onClick={handleView}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          ${baseClasses}
          glass border border-white/20 text-gray-300
          hover:text-white hover:border-neon-blue-500/50 hover:bg-white/10
          focus:ring-neon-blue-500
          ${className}
        `}
      >
        <Eye size={iconSizes[size]} />
        <span>View Resume</span>
      </motion.button>
    );
  }

  if (variant === 'primary') {
    return (
      <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            ${baseClasses}
            bg-gradient-neon text-white
            hover:shadow-lg hover:shadow-neon-blue-500/25
            focus:ring-neon-blue-500
            btn-futuristic
          `}
        >
          <Download size={iconSizes[size]} />
          <span>Download</span>
        </motion.button>
        
        <motion.button
          onClick={handleView}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            ${baseClasses}
            glass border border-white/20 text-gray-300
            hover:text-white hover:border-neon-blue-500/50 hover:bg-white/10
            focus:ring-neon-blue-500
          `}
        >
          <Eye size={iconSizes[size]} />
          <span>View</span>
        </motion.button>
      </div>
    );
  }

  return null;
}

// Additional component for resume preview
export function ResumePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-6 border border-white/10 space-y-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-neon rounded-lg">
            <FileText size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Resume</h3>
            <p className="text-gray-400 text-sm">Software Engineer & AI Researcher</p>
          </div>
        </div>
        <ResumeButton variant="primary" size="sm" />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Experience', value: '5+ Years' },
          { label: 'Projects', value: '20+' },
          { label: 'Publications', value: '6' },
          { label: 'Languages', value: '10+' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-4 glass-dark rounded-lg border border-white/10"
          >
            <div className="text-2xl font-bold text-gradient-cyan">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Key Skills Preview */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-white">Key Skills</h4>
        <div className="flex flex-wrap gap-2">
          {[
            'AI/ML', 'Python', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 
            'Docker', 'AWS', 'TensorFlow', 'PyTorch'
          ].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-3 py-1 bg-neon-blue-500/20 text-neon-blue-400 border border-neon-blue-500/50 rounded-full text-sm font-medium"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
