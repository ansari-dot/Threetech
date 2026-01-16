
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  id: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, id, icon }) => (
  <motion.div 
    className="group relative p-6 sm:p-8 lg:p-10 bg-black/40 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-500 hud-corner hover:-translate-y-2"
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay: parseInt(id) * 0.1, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ y: -8, scale: 1.02 }}
  >
    <div className="absolute top-4 right-4 sm:right-6 font-neon text-xs text-cyan-400/20 group-hover:text-cyan-400/60 font-black transition-colors">
      MOD::{id}
    </div>
    
    <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
      <motion.div 
        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center text-cyan-400 border border-cyan-400/30 rounded-lg group-hover:bg-cyan-400/10 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: parseInt(id) * 0.1 + 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {icon}
      </motion.div>
      <div className="space-y-3 sm:space-y-4">
        <motion.h3 
          className="text-lg sm:text-xl font-neon font-bold text-white tracking-widest uppercase group-hover:text-cyan-400 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: parseInt(id) * 0.1 + 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-cyan-100/40 text-xs sm:text-sm leading-relaxed font-medium group-hover:text-cyan-100/70 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: parseInt(id) * 0.1 + 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
      <motion.button 
        className="text-[10px] sm:text-xs font-neon font-bold tracking-[0.3em] uppercase text-cyan-400 hover:text-white transition-colors flex items-center gap-2 mt-2 sm:mt-4 group/btn"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: parseInt(id) * 0.1 + 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        ACCESS MODULE
        <motion.span 
          className="group-hover/btn:translate-x-2 transition-transform"
          whileHover={{ x: 5 }}
        >
          →
        </motion.span>
      </motion.button>
    </div>
  </motion.div>
);

const Services: React.FC = () => {
  const services = [
    {
      id: "01",
      title: "WEB DEVELOPMENT",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    },
    {
      id: "02",
      title: "APP DEVELOPMENT",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    },
    {
      id: "03",
      title: "WORDPRESS & DESIGN",
      description: "Professional WordPress websites with custom themes, plugins, and stunning visual design.",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    {
      id: "04",
      title: "SEO & MARKETING",
      description: "Comprehensive SEO strategies and digital marketing solutions to boost your online presence and rankings.",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    },
    {
      id: "05",
      title: "AI SOLUTIONS",
      description: "Cutting-edge artificial intelligence and machine learning solutions to automate and optimize your business processes.",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    {
      id: "06",
      title: "CLOUD SERVICES",
      description: "Scalable cloud infrastructure and migration services to ensure your applications are always available and performant.",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-20 lg:py-32">
      <motion.div 
        className="flex flex-col lg:flex-row justify-between items-end gap-6 lg:gap-8 mb-16 lg:mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="space-y-3 sm:space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="font-neon text-xs tracking-[0.4em] text-cyan-400 font-bold uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Services
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-neon font-black text-white tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            COMPREHENSIVE <span className="text-cyan-400 neon-text">SOFTWARE SOLUTIONS</span>
          </motion.h2>
        </motion.div>
        <motion.div 
          className="max-w-md text-cyan-100/40 text-xs sm:text-sm font-medium uppercase tracking-widest text-left lg:text-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          We deliver end-to-end software development services tailored to your business needs.
        </motion.div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
