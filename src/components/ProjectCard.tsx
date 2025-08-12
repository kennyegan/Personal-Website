'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -10 }}
      className="group relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-neon-blue-500/50 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue-500/20 to-cyber-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
        
        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 left-4 px-3 py-1 bg-gradient-neon rounded-full text-xs font-semibold text-white"
          >
            Featured
          </motion.div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 glass-dark rounded-full text-xs font-medium text-gray-300 border border-white/20">
          {project.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 space-y-4">
        {/* Title and Year */}
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-gradient-cyber transition-all duration-300">
            {project.title}
          </h3>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <Calendar size={14} />
            <span>{project.year}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-2 py-1 bg-white/10 rounded-lg text-xs font-medium text-gray-300 border border-white/20"
            >
              <Tag size={10} className="mr-1" />
              {tech}
            </motion.span>
          ))}
          {project.techStack.length > 4 && (
            <span className="inline-flex items-center px-2 py-1 bg-white/5 rounded-lg text-xs font-medium text-gray-400">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex space-x-3">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200"
              >
                <Github size={16} />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-white/10 text-gray-300 hover:text-neon-blue-400 hover:bg-neon-blue-500/20 transition-all duration-200"
              >
                <ExternalLink size={16} />
              </motion.a>
            )}
          </div>
          
          <Link href={`/projects/${project.id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-neon rounded-lg text-sm font-semibold text-white hover:shadow-lg hover:shadow-neon-blue-500/25 transition-all duration-200"
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-neon-blue-500/50 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}
