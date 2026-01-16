import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const WebDevelopment: React.FC = () => {
  const technologies = {
    frontend: ['React.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    backend: ['Node.js', 'Python', 'Django', 'Laravel', 'Express.js', 'PostgreSQL'],
    tools: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'Jest']
  };

  const features = [
    {
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect display on all devices and screen sizes.'
    },
    {
      title: 'SEO Optimized',
      description: 'Built with best practices for search engine optimization and fast loading times.'
    },
    {
      title: 'Secure Coding',
      description: 'Following security best practices to protect your application and user data.'
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with third-party services and payment gateways.'
    },
    {
      title: 'Performance',
      description: 'Optimized for speed with lazy loading, caching, and code splitting.'
    },
    {
      title: 'Scalable',
      description: 'Built to grow with your business using cloud infrastructure.'
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <motion.section 
        className="relative pt-24 sm:pt-28 md:pt-32 pb-16 px-4 sm:px-6 min-h-screen flex items-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute top-1/4 -left-20 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-cyan-600/10 rounded-full blur-[120px] sm:blur-[150px] md:blur-[180px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-0 -right-20 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        />
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:text-8xl font-neon font-black leading-none tracking-tighter text-white mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              WEB <span className="text-cyan-400">DEVELOPMENT</span>
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-cyan-100/60 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium border-l-2 border-cyan-500/30 pl-4 sm:pl-6 lg:pl-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Custom websites and web applications built with modern technologies including React, Vue, Angular, Node.js, and Python frameworks for optimal performance and user experience.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Details */}
      <motion.section 
        className="py-20 lg:py-32 bg-black relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="space-y-6 lg:space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl font-neon font-bold text-cyan-400 uppercase tracking-widest"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                  TECHNOLOGIES WE USE
              </motion.h2>
              <motion.div 
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div 
                  className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.h3 
                    className="text-lg sm:text-xl font-neon font-bold text-white mb-3 sm:mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    Frontend
                  </motion.h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {technologies.frontend.map((tech, idx) => (
                      <motion.div 
                        key={idx} 
                        className="text-sm sm:text-base text-cyan-100/60"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + idx * 0.05, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        • {tech}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.h3 
                    className="text-lg sm:text-xl font-neon font-bold text-white mb-3 sm:mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    Backend
                  </motion.h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {technologies.backend.map((tech, idx) => (
                      <motion.div 
                        key={idx} 
                        className="text-sm sm:text-base text-cyan-100/60"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 + idx * 0.05, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        • {tech}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.h3 
                    className="text-lg sm:text-xl font-neon font-bold text-white mb-3 sm:mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    Tools & DevOps
                  </motion.h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {technologies.tools.map((tool, idx) => (
                      <motion.div 
                        key={idx} 
                        className="text-sm sm:text-base text-cyan-100/60"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.1 + idx * 0.05, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        • {tool}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="relative z-20 border border-cyan-400 p-3 sm:p-4 bg-cyan-950/50 backdrop-blur-sm rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Web Development" 
                  className="w-full h-auto rounded-lg"
                  style={{ width: '1000px', height: '550px', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 lg:py-32 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neon font-bold mb-8 text-white tracking-widest text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
                SERVICE <span className="text-cyan-400">FEATURES</span>
            </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-cyan-400 transition-all"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 + 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.h3 
                  className="text-base sm:text-lg lg:text-xl font-neon font-bold text-cyan-400 mb-3 sm:mb-4 uppercase tracking-widest"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 + 0.4, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-cyan-100/60"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 + 0.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 lg:py-32 bg-black relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-neon font-bold mb-6 sm:mb-8 text-white tracking-widest"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
                  READY TO START <span className="text-cyan-400">YOUR PROJECT</span>
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-cyan-100/60 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
                  Let's discuss your web development needs and create something amazing together.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.a 
                href="/contact" 
                className="bg-cyan-400 text-black px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-6 font-black text-sm sm:text-base md:text-lg tracking-widest uppercase transition-all hover:scale-105 border border-cyan-400 active:scale-95"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                  START YOUR PROJECT
              </motion.a>
              <motion.a 
                href="/services" 
                className="bg-transparent border border-cyan-400 text-cyan-400 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-6 font-black text-sm sm:text-base md:text-lg tracking-widest uppercase transition-all hover:bg-cyan-400/10 hover:border-cyan-400 active:scale-95"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                  VIEW ALL SERVICES
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
