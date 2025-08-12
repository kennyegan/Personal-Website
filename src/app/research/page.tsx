'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Tag, Calendar, Award, BookOpen, FileText } from 'lucide-react';
import ResearchCard from '@/components/ResearchCard';
import { researchPapers, getAllTags, ResearchPaper } from '@/lib/research';

const statusOptions = ['All', 'Published', 'Under Review', 'Preprint', 'In Progress'];

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [sortBy, setSortBy] = useState<'year' | 'citations' | 'title'>('year');

  const allTags = ['All', ...getAllTags()];

  const filteredAndSortedPapers = researchPapers
    .filter((paper) => {
      const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           paper.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           paper.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = selectedStatus === 'All' || paper.status === selectedStatus;
      const matchesTag = selectedTag === 'All' || paper.tags.includes(selectedTag);
      
      return matchesSearch && matchesStatus && matchesTag;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'year':
          return b.year - a.year;
        case 'citations':
          return (b.citationCount || 0) - (a.citationCount || 0);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  const totalCitations = researchPapers.reduce((sum, paper) => sum + (paper.citationCount || 0), 0);
  const publishedPapers = researchPapers.filter(paper => paper.status === 'Published').length;

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-cyber">
            Research Publications
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advancing the frontiers of AI and machine learning through rigorous research, 
            peer-reviewed publications, and collaborative innovation.
          </p>
        </motion.div>

        {/* Research Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Total Papers', value: researchPapers.length, icon: FileText },
            { label: 'Published', value: publishedPapers, icon: BookOpen },
            { label: 'Citations', value: totalCitations, icon: Award },
            { label: 'Research Areas', value: allTags.length - 1, icon: Tag }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/10 text-center hover:border-neon-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-neon rounded-lg flex items-center justify-center">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient-cyber mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-6 border border-white/10 mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search papers by title, abstract, or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Status Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue-500 focus:border-transparent"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status} className="bg-dark-900">
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {/* Tag Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Research Area</label>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue-500 focus:border-transparent"
              >
                {allTags.map((tag) => (
                  <option key={tag} value={tag} className="bg-dark-900">
                    {tag}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'year' | 'citations' | 'title')}
                className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue-500 focus:border-transparent"
              >
                <option value="year" className="bg-dark-900">Year (Newest First)</option>
                <option value="citations" className="bg-dark-900">Citation Count</option>
                <option value="title" className="bg-dark-900">Title (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-400">
            Showing {filteredAndSortedPapers.length} of {researchPapers.length} papers
          </div>
        </motion.div>

        {/* Papers List */}
        <AnimatePresence mode="wait">
          {filteredAndSortedPapers.length > 0 ? (
            <motion.div
              key={`${selectedStatus}-${selectedTag}-${searchTerm}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {filteredAndSortedPapers.map((paper, index) => (
                <ResearchCard 
                  key={paper.id} 
                  paper={paper} 
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <div className="glass rounded-2xl p-12 border border-white/10 max-w-md mx-auto">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-neon rounded-full flex items-center justify-center">
                  <Search size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No Papers Found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <motion.button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedStatus('All');
                    setSelectedTag('All');
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-neon rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-blue-500/25 transition-all duration-200"
                >
                  Clear Filters
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-20 border-t border-white/10"
        >
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyber">
              Research Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My research spans multiple domains, focusing on the intersection of AI, 
              machine learning, and practical applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {getAllTags().map((tag, index) => {
              const paperCount = researchPapers.filter(paper => paper.tags.includes(tag)).length;
              return (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  onClick={() => setSelectedTag(tag)}
                  className="px-6 py-3 glass rounded-full border border-white/20 hover:border-neon-blue-500/50 text-gray-300 hover:text-white transition-all duration-200 group"
                >
                  <span className="font-medium">{tag}</span>
                  <span className="ml-2 text-xs text-gray-500 group-hover:text-gray-400">
                    ({paperCount})
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Academic Profile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-20 border-t border-white/10"
        >
          <div className="glass rounded-3xl p-12 border border-white/10 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyber">
                Academic Collaboration
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Interested in collaborating on research projects or discussing ideas? 
                I'm always open to working with fellow researchers and institutions 
                on cutting-edge AI and ML projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:research@kenny.dev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-neon rounded-lg text-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue-500/25 transition-all duration-200 btn-futuristic"
              >
                Collaborate with Me
              </motion.a>
              
              <motion.a
                href="https://scholar.google.com/citations?user=kenny-chen"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-lg border border-white/20 hover:border-neon-blue-500/50 text-white hover:bg-white/10 transition-all duration-200 font-semibold"
              >
                Google Scholar Profile
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
