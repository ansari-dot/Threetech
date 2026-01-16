
import React from 'react';
import { motion } from 'framer-motion';

const TrustBar: React.FC = () => {
  const features = [
    { label: "Expert Team", icon: "✓" },
    { label: "100+ Projects", icon: "✓" },
    { label: "24/7 Support", icon: "✓" },
  ];

  return (
    <motion.div 
      className="bg-black/50 border-y border-cyan-500/20 py-8 sm:py-10 md:py-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="relative group flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-cyan-400 mb-2">
                {item.icon}
              </div>
              <div className="font-neon text-xs sm:text-sm tracking-wider text-cyan-100 uppercase font-bold">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TrustBar;
