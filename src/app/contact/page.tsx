'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Calendar,
  MessageCircle,
  Coffee,
  Briefcase,
  Users,
  CheckCircle
} from 'lucide-react';

const contactMethods = [
  {
    title: 'Email',
    description: 'Send me a message and I\'ll respond within 24 hours',
    value: 'kenegan2005@gmail.com',
    href: 'kenegan2005@gmail.com',
    icon: Mail,
    color: 'neon-blue'
  },
  {
    title: 'LinkedIn',
    description: 'Connect with me professionally',
    value: 'linkedin.com/in/kenneth-egan2005/',
    href: 'https://www.linkedin.com/in/kenneth-egan2005/',
    icon: Linkedin,
    color: 'blue'
  },
  {
    title: 'GitHub',
    description: 'Check out my contributions to the world that are open source',
    value: 'github.com/kennyegan',
    href: 'https://github.com/kennyegan',
    icon: Github,
    color: 'gray'
  }
];

const collaborationTypes = [
  {
    title: 'Research Collaboration',
    description: 'Joint research projects, paper co-authoring, academic partnerships',
    icon: Users,
    examples: ['AI/ML research', 'Academic papers', 'Conference presentations']
  },
  {
    title: 'Consulting & Advisory',
    description: 'Strategic technology consulting, AI implementation guidance',
    icon: Briefcase,
    examples: ['AI strategy', 'Technical architecture', 'Product development']
  },
  {
    title: 'Speaking & Events',
    description: 'Conference talks, workshops, podcasts, and panel discussions',
    icon: MessageCircle,
    examples: ['Tech conferences', 'Workshops', 'Podcast interviews']
  },
  {
    title: 'Coffee Chats',
    description: 'Casual conversations about technology, startups, and innovation',
    icon: Coffee,
    examples: ['Career advice', 'Startup discussions', 'Tech trends']
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    collaboration_type: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        collaboration_type: ''
      });
    }, 3000);
  };

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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always excited to connect with fellow innovators.
            Whether you're looking to collaborate on a project, discuss new ideas, or just want to chat 
            about the future of technology, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-neon rounded-lg">
                  <Send size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Send Me a Message</h2>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 mx-auto bg-electric-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle size={32} className="text-electric-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="collaboration_type" className="block text-sm font-medium text-gray-300 mb-2">
                      Collaboration Type
                    </label>
                    <select
                      id="collaboration_type"
                      name="collaboration_type"
                      value={formData.collaboration_type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="" className="bg-dark-900">Select collaboration type</option>
                      <option value="research" className="bg-dark-900">Research Collaboration</option>
                      <option value="consulting" className="bg-dark-900">Consulting & Advisory</option>
                      <option value="speaking" className="bg-dark-900">Speaking & Events</option>
                      <option value="coffee" className="bg-dark-900">Coffee Chat</option>
                      <option value="other" className="bg-dark-900">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me more about your project or idea..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className={`w-full px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-neon hover:shadow-lg hover:shadow-neon-blue-500/25 btn-futuristic'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Contact Methods</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="block glass rounded-2xl p-6 border border-white/10 hover:border-neon-blue-500/50 transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 bg-${method.color}-500/20 rounded-lg group-hover:bg-${method.color}-500/30 transition-colors`}>
                          <Icon size={24} className={`text-${method.color}-400`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white group-hover:text-gradient-cyber transition-all duration-300">
                            {method.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                          <p className="text-gray-300 font-medium">{method.value}</p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Calendar Link */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass rounded-2xl p-6 border border-white/10 text-center space-y-4"
            >
              <div className="w-12 h-12 mx-auto bg-gradient-neon rounded-lg flex items-center justify-center">
                <Calendar size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Schedule a Call</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Prefer to chat in person? Book a 30-minute call to discuss your project.
                </p>
                <motion.a
                  href=" " // TODO: Add calendly link once created
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-neon rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-blue-500/25 transition-all duration-200 btn-futuristic"
                >
                  <Calendar size={18} />
                  <span>Book a Call</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Collaboration Types */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyber">
              Let's Collaborate
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm open to various types of collaboration and partnerships. 
              Here are some ways we could work together:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {collaborationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 border border-white/10 hover:border-neon-blue-500/50 transition-all duration-300 space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-neon rounded-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{type.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example) => (
                        <span
                          key={example}
                          className="px-3 py-1 bg-white/10 text-gray-300 border border-white/20 rounded-full text-sm"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-20 border-t border-white/10"
        >
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyber">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "What's the best way to contact you?",
                a: "Email (hello@kenny.dev) is usually the fastest way to reach me. I typically respond within 24 hours."
              },
              {
                q: "Do you take on consulting projects?",
                a: "Yes! I'm selective about consulting engagements, but I'm always interested in innovative projects that align with my expertise in AI/ML and software engineering."
              },
              {
                q: "Are you available for speaking engagements?",
                a: "Absolutely! I love sharing knowledge about AI, machine learning, and entrepreneurship. Feel free to reach out with details about your event."
              },
              {
                q: "Can you review my research paper or startup idea?",
                a: "I'm happy to provide feedback when time permits. Please include sufficient context in your initial message so I can better understand how I might help."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
