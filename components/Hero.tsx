
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["CREATIVITY", "INNOVATION", "EXCELLENCE", "SOLUTIONS"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-36 sm:pt-28 md:pt-32 pb-16 px-4 sm:px-6 min-h-screen flex items-center overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/4 -left-20 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-cyan-600/10 rounded-full blur-[120px] sm:blur-[150px] md:blur-[180px]"></div>
      <div className="absolute bottom-0 -right-20 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px]"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8 lg:ml-0 lg:ml-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neon font-black leading-none tracking-tighter text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              BUILDING<br/>
              <span className="text-cyan-400 neon-text">DIGITAL</span><br/>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWordIndex}
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[currentWordIndex].split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      className="inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: letterIndex * 0.05 
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-cyan-100/60 max-w-md lg:max-w-lg leading-relaxed font-medium border-l-2 border-cyan-500/30 pl-4 sm:pl-6 lg:pl-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              We craft exceptional software solutions that transform businesses. From enterprise applications to cutting-edge AI systems.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <button className="relative group overflow-hidden bg-white text-black px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 font-black uppercase tracking-widest text-xs sm:text-sm transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10">Start Your Project →</span>
                <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button className="bg-transparent border border-cyan-400/50 text-cyan-400 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 font-black uppercase tracking-widest text-xs sm:text-sm transition-all hover:bg-cyan-400/10 hover:border-cyan-400 active:scale-95 hud-corner">
                Explore Services
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual - Robot Character */}
          <motion.div 
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="relative z-20 p-2 sm:p-3 lg:p-4 backdrop-blur-sm rounded-lg overflow-hidden -mt-4 sm:-mt-2 lg:-mt-8 ml-8">
                <img 
                  src="/robot.png" 
                  alt="Robot with laptop" 
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
