'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Brain, Code, Rocket, MessageCircle, Mic, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ResearchCard from '@/components/ResearchCard';
import ResumeButton from '@/components/ResumeButton';
import { featuredProjects } from '@/lib/projects';
import { featuredPapers } from '@/lib/research';



const stats = [
  { label: 'Years Experience', value: '5+', icon: Code },
  { label: 'Projects Built', value: '20+', icon: Rocket },
  { label: 'Research Papers', value: '6', icon: Brain },
  { label: 'Open Source', value: '15+', icon: Github }
];

const skills = [
  'Artificial Intelligence',
  'Machine Learning',
  'Full Stack Development',
  'React & Next.js',
  'Python & TypeScript',
  'Cloud Computing',
  'Blockchain',
  'Research & Innovation'
];

export default function HomePage() {
  const [isNovaOpen, setIsNovaOpen] = useState(false);
  const [novaMessages, setNovaMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m Nova, Kenny\'s AI assistant. How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Voice functionality
  const startVoiceInput = async () => {
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      alert('Speech recognition is not supported in your browser');
      return;
    }

    try {
      setIsListening(true);
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (error) {
      setIsListening(false);
      console.error('Voice input error:', error);
    }
  };

  const handleNovaSubmit = async (message: string) => {
    if (!message.trim() || isLoading) return;

    // Add user message
    setNovaMessages(prev => [...prev, { role: 'user', content: message }]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setNovaMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('AI API Error:', error);
      setNovaMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I\'m having trouble connecting right now. Please try again later!' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-dots opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 text-neon-blue-400">
                  <Sparkles size={24} />
                  <span className="text-lg font-semibold">Hello, I'm</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-gradient-cyber leading-tight">
                  Kenny Egan
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  AI Researcher & Software Engineer
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                I'm passionate about building the future through innovative AI solutions, 
                cutting-edge software engineering, and transformative startup ventures. 
                Currently pushing the boundaries of machine learning and creating products 
                that make a meaningful impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-neon rounded-lg text-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue-500/25 transition-all duration-200 flex items-center justify-center space-x-2 btn-futuristic"
                  >
                    <span>View My Work</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                
                <ResumeButton variant="view" size="lg" />
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center space-x-4"
              >
                <span className="text-gray-400">Connect with me:</span>
                {[
                  { icon: Github, href: 'https://github.com/kennyegan', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/kenneth-egan2005/', label: 'LinkedIn' },
                  { icon: Mail, href: 'kenegan2005@gmail.com', label: 'Email' }
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 glass rounded-lg border border-white/20 text-gray-300 hover:text-white hover:border-neon-blue-500/50 transition-all duration-200"
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Nova AI Supernova */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative flex flex-col items-center space-y-12"
            >
              <div className="relative w-96 h-96 mx-auto">
                {/* Supernova Explosion Container */}
                <motion.div
                  className="relative w-full h-full cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsNovaOpen(true)}
                >
                  {/* Outer Shock Wave */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.15, 1],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, transparent 60%, rgba(249, 115, 22, 0.4) 70%, rgba(220, 38, 38, 0.3) 80%, rgba(239, 68, 68, 0.2) 90%, transparent 100%)',
                      filter: 'blur(3px)'
                    }}
                  />
                  
                  {/* Supernova Ejecta Streams */}
                  {[...Array(12)].map((_, i) => {
                    const lengths = [110, 100, 120, 105, 115, 95, 125, 110, 120, 105, 130, 100];
                    const thicknesses = [3, 2, 4, 3, 2, 3, 4, 2, 3, 4, 2, 3];
                    const durations = [4, 3.5, 4.5, 3.8, 4.2, 3.6, 4.8, 3.4, 4.6, 3.9, 4.3, 3.7];
                    
                    return (
                      <motion.div
                        key={i}
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          scaleY: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: durations[i],
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                        className="absolute origin-center"
                        style={{
                          top: '50%',
                          left: '50%',
                          width: `${thicknesses[i]}px`,
                          height: `${lengths[i]}px`,
                          background: `linear-gradient(180deg, 
                            rgba(255, 255, 255, 0.9) 0%, 
                            rgba(251, 146, 60, 0.8) 20%, 
                            rgba(249, 115, 22, 0.6) 50%, 
                            rgba(220, 38, 38, 0.4) 80%, 
                            transparent 100%)`,
                          transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                          borderRadius: '50px',
                          filter: 'blur(1px)'
                        }}
                      />
                    );
                  })}
                  
                  {/* Supernova Central Region */}
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
                    style={{
                      background: `radial-gradient(circle,
                        rgba(255, 255, 255, 0.9) 0%,
                        rgba(255, 255, 255, 0.7) 10%,
                        rgba(255, 223, 100, 0.8) 20%,
                        rgba(251, 146, 60, 0.9) 40%,
                        rgba(249, 115, 22, 0.7) 60%,
                        rgba(234, 88, 12, 0.5) 80%,
                        rgba(220, 38, 38, 0.3) 95%,
                        transparent 100%)`,
                      boxShadow: `
                        0 0 40px rgba(255, 255, 255, 0.6),
                        0 0 80px rgba(251, 146, 60, 0.5),
                        0 0 120px rgba(249, 115, 22, 0.4),
                        inset 0 0 30px rgba(255, 255, 255, 0.3)
                      `
                    }}
                  >
                    {/* Central White-Hot Core */}
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white"
                      style={{
                        boxShadow: '0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 0.8)'
                      }}
                    />
                    
                    {/* Stellar Material Clumps */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [0.5, 1, 0.5],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 2 + (i % 3) * 0.5,
                          repeat: Infinity,
                          delay: i * 0.25,
                          ease: "easeInOut"
                        }}
                        className="absolute w-4 h-4 rounded-full"
                        style={{
                          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.9) 0%, rgba(249, 115, 22, 0.6) 100%)',
                          top: `${40 + 20 * Math.cos((i * 45) * Math.PI / 180)}%`,
                          left: `${40 + 20 * Math.sin((i * 45) * Math.PI / 180)}%`,
                          transform: 'translate(-50%, -50%)',
                          filter: 'blur(1px)'
                        }}
                      />
                    ))}
                    
                    {/* Supernova Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="relative w-12 h-12 flex items-center justify-center"
                      >
                        {/* Multiple star rays creating supernova effect */}
                        <div className="absolute w-full h-full">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-6 bg-white rounded-full"
                              style={{
                                top: '50%',
                                left: '50%',
                                transformOrigin: '50% 50%',
                                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                              }}
                            />
                          ))}
                        </div>
                        {/* Shorter diagonal rays */}
                        <div className="absolute w-full h-full">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-0.5 h-4 bg-orange-200 rounded-full"
                              style={{
                                top: '50%',
                                left: '50%',
                                transformOrigin: '50% 50%',
                                transform: `translate(-50%, -50%) rotate(${i * 45 + 22.5}deg)`,
                                boxShadow: '0 0 8px rgba(251, 146, 60, 0.6)'
                              }}
                            />
                          ))}
                        </div>
                        {/* Central bright core */}
                        <div className="w-4 h-4 bg-white rounded-full" style={{
                          boxShadow: '0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.8)'
                        }} />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Nebular Remnant Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, transparent 40%, rgba(249, 115, 22, 0.1) 60%, rgba(220, 38, 38, 0.1) 80%, transparent 100%)',
                      filter: 'blur(20px)'
                    }}
                  />
                  
                  {/* Hover Enhancement */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(251, 146, 60, 0.1) 50%, transparent 100%)',
                    filter: 'blur(10px)'
                  }} />
                </motion.div>
              </div>
              
              {/* Interact with Nova Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-center mt-8 relative z-10"
              >
                <h3 className="text-3xl font-bold mb-3" style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Interact with Nova
                </h3>
                <p className="text-gray-300 text-lg font-medium">
                  Click the supernova to engage with my AI assistant
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Powered by advanced AI • Available 24/7
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 glass rounded-2xl border border-white/10 hover:border-neon-blue-500/50 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 mx-auto mb-4 bg-gradient-neon rounded-lg flex items-center justify-center"
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold text-gradient-cyber mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyber">
                Expertise & Skills
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Combining deep technical knowledge with innovative thinking to solve complex problems
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 glass rounded-full border border-white/20 hover:border-neon-blue-500/50 text-gray-300 hover:text-white transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyber">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Showcasing innovative solutions that push the boundaries of technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(0, 3).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass rounded-lg border border-white/20 hover:border-neon-blue-500/50 text-white hover:bg-white/10 transition-all duration-200 flex items-center space-x-2 mx-auto"
                >
                  <span>View All Projects</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyber">
                Latest Research
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contributing to the advancement of AI and machine learning through rigorous research
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPapers.slice(0, 2).map((paper, index) => (
                <ResearchCard key={paper.id} paper={paper} index={index} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/research">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass rounded-lg border border-white/20 hover:border-neon-blue-500/50 text-white hover:bg-white/10 transition-all duration-200 flex items-center space-x-2 mx-auto"
                >
                  <span>View All Research</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-12 border border-white/10 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyber">
                Let's Build the Future
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Interested in collaborating on cutting-edge projects or discussing innovative ideas? 
                I'm always excited to connect with fellow innovators and forward-thinkers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-neon rounded-lg text-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue-500/25 transition-all duration-200 btn-futuristic"
                >
                  Get In Touch
                </motion.button>
              </Link>
              
              <ResumeButton variant="download" size="lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nova AI Modal */}
      {isNovaOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setIsNovaOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="w-full max-w-2xl h-[600px] flex flex-col overflow-hidden rounded-3xl"
            style={{
              background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.98) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(251, 146, 60, 0.2)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 100px rgba(251, 146, 60, 0.1)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 rounded-full border-2 border-transparent p-[2px]"
                    style={{
                      background: 'conic-gradient(from 0deg, #f97316, #ea580c, #dc2626, #f59e0b, #f97316)'
                    }}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center" style={{ 
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(251, 146, 60, 0.3) 50%, rgba(15, 23, 42, 0.9) 100%)' 
                    }}>
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                  <div className="absolute inset-0 rounded-full blur-lg animate-pulse" style={{
                    background: 'radial-gradient(circle, rgba(251, 146, 60, 0.4) 0%, transparent 70%)'
                  }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{
                    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Nova AI</h3>
                  <p className="text-sm text-gray-400">Supernova-Powered Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsNovaOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {novaMessages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    message.role === 'user' 
                      ? 'text-white ml-4' 
                      : 'bg-white/10 text-gray-100 mr-4'
                  }`}
                  style={message.role === 'user' ? {
                    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                  } : {}}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/10">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask Nova anything about Kenny's work..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-transparent transition-all duration-200"
                    style={{
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(251, 146, 60, 0.5)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(251, 146, 60, 0.2), inset 0 2px 4px rgba(0, 0, 0, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.1)';
                    }}
                    onKeyPress={(e) => e.key === 'Enter' && handleNovaSubmit(inputMessage)}
                  />
                </div>
                
                <button
                  onClick={startVoiceInput}
                  disabled={isLoading}
                  className={`p-3 rounded-xl transition-all duration-200 ${
                    isListening 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white disabled:opacity-50'
                  }`}
                >
                  <Mic className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => handleNovaSubmit(inputMessage)}
                  disabled={!inputMessage.trim() || isLoading}
                  className="p-3 rounded-xl text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                  }}
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-2 text-center">
                <span style={{ color: '#f97316' }}>Nova</span> • Supernova-powered AI assistant • Specialized in Kenny's portfolio and expertise
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
