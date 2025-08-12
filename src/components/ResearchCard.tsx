'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, ExternalLink, Github, Users, Calendar, Award, Tag } from 'lucide-react';
import { ResearchPaper } from '@/lib/research';

interface ResearchCardProps {
  paper: ResearchPaper;
  index?: number;
}

const statusColors = {
  'Published': 'bg-electric-green-500/20 text-electric-green-400 border-electric-green-500/50',
  'Under Review': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
  'Preprint': 'bg-neon-blue-500/20 text-neon-blue-400 border-neon-blue-500/50',
  'In Progress': 'bg-cyber-purple-500/20 text-cyber-purple-400 border-cyber-purple-500/50'
};

export default function ResearchCard({ paper, index = 0 }: ResearchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="group relative glass rounded-2xl p-6 border border-white/10 hover:border-neon-blue-500/50 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue-500/10 to-cyber-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 bg-gradient-neon rounded-lg"
            >
              <FileText size={20} className="text-white" />
            </motion.div>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[paper.status]}`}>
                {paper.status}
              </span>
              
              {paper.featured && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-3 py-1 bg-gradient-cyber rounded-full text-xs font-semibold text-white"
                >
                  Featured
                </motion.span>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <Calendar size={14} />
            <span>{paper.year}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-gradient-cyber transition-all duration-300 leading-tight">
          {paper.title}
        </h3>

        {/* Authors */}
        <div className="flex items-center space-x-2 text-gray-300">
          <Users size={16} />
          <span className="text-sm">
            {paper.authors.join(', ')}
          </span>
        </div>

        {/* Journal and Citations */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400 italic">{paper.journal}</span>
          {paper.citationCount && (
            <div className="flex items-center space-x-1 text-gray-400">
              <Award size={14} />
              <span>{paper.citationCount} citations</span>
            </div>
          )}
        </div>

        {/* Abstract */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
          {paper.abstract}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {paper.tags.slice(0, 3).map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-2 py-1 bg-white/10 rounded-lg text-xs font-medium text-gray-300 border border-white/20"
            >
              <Tag size={10} className="mr-1" />
              {tag}
            </motion.span>
          ))}
          {paper.tags.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 bg-white/5 rounded-lg text-xs font-medium text-gray-400">
              +{paper.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex space-x-3">
            {paper.pdfUrl && (
              <motion.a
                href={paper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 px-3 py-2 bg-red-500/20 text-red-400 rounded-lg text-xs font-medium hover:bg-red-500/30 transition-all duration-200"
              >
                <FileText size={14} />
                <span>PDF</span>
              </motion.a>
            )}
            
            {paper.arxivUrl && (
              <motion.a
                href={paper.arxivUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 px-3 py-2 bg-orange-500/20 text-orange-400 rounded-lg text-xs font-medium hover:bg-orange-500/30 transition-all duration-200"
              >
                <ExternalLink size={14} />
                <span>arXiv</span>
              </motion.a>
            )}
            
            {paper.githubUrl && (
              <motion.a
                href={paper.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 px-3 py-2 bg-white/10 text-gray-300 rounded-lg text-xs font-medium hover:bg-white/20 transition-all duration-200"
              >
                <Github size={14} />
                <span>Code</span>
              </motion.a>
            )}
          </div>
          
          <Link href={`/research/${paper.id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-neon rounded-lg text-sm font-semibold text-white hover:shadow-lg hover:shadow-neon-blue-500/25 transition-all duration-200"
            >
              Read More
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-neon-blue-500/50 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}
