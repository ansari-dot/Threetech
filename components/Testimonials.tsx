
import React from 'react';
import { motion } from 'framer-motion';
import sami from '../assets/test.jpeg'
const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Sami Khan",
      quote: "3novator built our AI-powered SaaS platform. The quality of work and attention to detail is remarkable.",
      date: "July 1, 2025",
      img: sami
    },
    {
      name: "Mason",
      quote: "Their SEO services helped us rank on the first page of Google. Our traffic increased by 300% in just 3 months!",
      date: "November 5, 2026",
      img: "https://i.pravatar.cc/150?u=mason"
    },
    {
      name: "Jonah",
      quote: "3novator built our AI-powered SaaS platform. The quality of work and attention to detail is remarkable.",
      date: "January 5, 2026",
      img: "https://i.pravatar.cc/150?u=jonah"
    }
  ];

  return (
    <div className="py-20 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="flex justify-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="border border-cyan-400 text-cyan-400 px-4 sm:px-6 py-1 rounded-sm font-neon font-bold text-xs tracking-[0.3em] uppercase neon-border-blue">
            TESTIMONIALS
          </div>
        </motion.div>

        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-neon font-bold text-center mb-6 sm:mb-8 text-white tracking-widest"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          WHAT OUR <span className="text-cyan-400 neon-text-blue">CLIENTS SAY</span>
        </motion.h2>
        
        <motion.p 
          className="text-center text-cyan-100/60 text-sm sm:text-base md:text-lg mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Trusted by businesses worldwide. Read what our clients have to say about working with 3novator.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {reviews.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="bg-cyan-950/10 border border-cyan-500/20 p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl relative overflow-hidden hover:border-cyan-400 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 + 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 p-2 sm:p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3601 14 14.017 12.6569 14.017 11V8H20.017V14H22.017V21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.91241 16 4.01697 16H7.01697V14H5.01697C3.36012 14 2.01697 12.6569 2.01697 11V8H8.01697V14H10.017V21H2.01697Z"/></svg>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <img src={item.img} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-cyan-400 p-0.5 sm:p-1 grayscale group-hover:grayscale-0 transition-all neon-border-blue" />
                <div>
                  <h4 className="text-lg sm:text-xl font-neon font-bold text-cyan-400 neon-text-blue">{item.name}</h4>
                  <p className="text-cyan-100/50 text-xs sm:text-sm">{item.date}</p>
                </div>
              </div>
              <p className="text-cyan-100/70 text-sm sm:text-base lg:text-lg italic leading-relaxed font-medium">"{item.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
