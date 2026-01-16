
import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-black py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neon font-bold mb-6 sm:mb-8 text-white tracking-widest">
            WHY CHOOSE <span className="text-cyan-400 neon-text-blue">3NOVATOR</span>
          </h2>
          <p className="text-cyan-100/60 text-sm sm:text-base md:text-lg uppercase tracking-widest font-bold max-w-2xl mx-auto">
            We combine technical expertise with creative excellence to deliver solutions that drive real business results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          <motion.div 
            className="p-6 sm:p-8 lg:p-10 border border-cyan-400/20 rounded-sm hover:border-cyan-400 transition-all duration-700 hover:neon-border-blue bg-cyan-950/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8 }}
          >
            <div className="text-cyan-400 font-neon text-3xl sm:text-4xl mb-4 sm:mb-6 neon-text-blue">01</div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 tracking-widest uppercase">EXPERT DEVELOPMENT TEAM</h3>
            <p className="text-cyan-100/50 text-xs sm:text-sm leading-relaxed uppercase tracking-tighter">
              Our senior developers specialize in modern tech stacks including MERN, Django, Laravel, React Native, and Flutter. We build scalable, maintainable solutions.
            </p>
          </motion.div>
          
          <motion.div 
            className="p-6 sm:p-8 lg:p-10 border border-cyan-400/20 rounded-sm hover:border-cyan-400 transition-all duration-700 hover:neon-border-blue bg-cyan-950/5 lg:-translate-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8 }}
          >
            <div className="text-cyan-400 font-neon text-3xl sm:text-4xl mb-4 sm:mb-6 neon-text-blue">02</div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 tracking-widest uppercase">DESIGN EXCELLENCE</h3>
            <p className="text-cyan-100/50 text-xs sm:text-sm leading-relaxed uppercase tracking-tighter">
              Beautiful, intuitive interfaces that users love. Our designers create experiences that combine aesthetics with functionality.
            </p>
          </motion.div>
          
          <motion.div 
            className="p-6 sm:p-8 lg:p-10 border border-cyan-400/20 rounded-sm hover:border-cyan-400 transition-all duration-700 hover:neon-border-blue bg-cyan-950/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8 }}
          >
            <div className="text-cyan-400 font-neon text-3xl sm:text-4xl mb-4 sm:mb-6 neon-text-blue">03</div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 tracking-widest uppercase">AGILE METHODOLOGY</h3>
            <p className="text-cyan-100/50 text-xs sm:text-sm leading-relaxed uppercase tracking-tighter">
              Fast, iterative development with regular updates. We deliver working software quickly and adapt to your changing needs.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
