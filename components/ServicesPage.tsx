import React from 'react';
import { motion } from 'framer-motion';
import { motion as m } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      description: "Custom websites and web applications built with modern technologies including React, Vue, Angular, Node.js, and Python frameworks.",
      features: ["Responsive Design", "SEO Optimized", "Secure Coding", "API Integration", "Performance", "Scalable"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
      link: "/services/web-development"
    },
    {
      id: 2,
      title: "APP DEVELOPMENT",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and native Swift/Kotlin development.",
      features: ["App Store Ready", "Push Notifications", "Offline Support", "Analytics Integration", "Payment Integration", "Social Login"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      ),
      link: "/services/app-development"
    },
    {
      id: 3,
      title: "WORDPRESS & DESIGN",
      description: "Professional WordPress websites with custom themes, plugins, and stunning visual design using modern UI/UX principles.",
      features: ["Responsive Design", "SEO Optimized", "E-commerce Ready", "Custom Plugins", "Performance", "Brand Identity"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      link: "/services/wordpress-design"
    },
    {
      id: 4,
      title: "SEO & MARKETING",
      description: "Comprehensive SEO strategies and digital marketing solutions including on-page optimization, content marketing, and social media.",
      features: ["SEO Optimized", "Content Marketing", "Social Media", "Analytics", "Email Marketing", "PPC Campaigns"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      ),
      link: "/services/seo-marketing"
    },
    {
      id: 5,
      title: "AI SOLUTIONS",
      description: "Cutting-edge AI and machine learning solutions including chatbots, predictive analytics, computer vision, and automation.",
      features: ["Machine Learning", "Chatbots", "Computer Vision", "Predictive Analytics", "Automation", "Natural Language"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      link: "/services/ai-solutions"
    },
    {
      id: 6,
      title: "CLOUD SERVICES",
      description: "Scalable cloud infrastructure and migration services including AWS, Azure, and Google Cloud deployment and DevOps.",
      features: ["Scalable Infrastructure", "High Availability", "Cost Optimization", "Global Reach", "Compliance Ready", "24/7 Support"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
        </svg>
      ),
      link: "/services/cloud-services"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "DISCOVERY",
      description: "We understand your business goals and requirements through detailed consultation and research."
    },
    {
      step: "02",
      title: "PLANNING",
      description: "We create a comprehensive project plan with timelines, milestones, and deliverables."
    },
    {
      step: "03",
      title: "DEVELOPMENT",
      description: "Our team builds your solution using agile methodology with regular updates and feedback."
    },
    {
      step: "04",
      title: "DEPLOYMENT",
      description: "We launch your project and provide ongoing support and maintenance as needed."
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <motion.section 
        className="relative pt-36 sm:pt-28 md:pt-32 pb-16 px-4 sm:px-6 min-h-[70vh] sm:min-h-screen flex items-center overflow-hidden"
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
              OUR <span className="text-cyan-400">SERVICES</span>
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-cyan-100/60 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium border-l-2 border-cyan-500/30 pl-4 sm:pl-6 lg:pl-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              We offer comprehensive digital solutions to help your business thrive in modern world. From web development to AI solutions, we've got you covered.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-20 lg:py-32 bg-black relative"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id} 
                className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-6 sm:p-6 lg:p-8 hover:border-cyan-400 transition-all group w-full"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-cyan-400/30 transition-all">
                  <div className="text-cyan-400 w-6 h-6 sm:w-8 sm:h-8">{service.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-neon font-bold text-white mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-cyan-100/60 mb-4 sm:mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <div 
                      key={featureIdx} 
                      className="flex items-center gap-2 text-xs sm:text-sm text-cyan-100/50"
                    >
                      <span className="text-cyan-400">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6">
                  <a 
                    href={service.link}
                    className="text-[10px] sm:text-xs font-neon font-bold tracking-[0.3em] uppercase text-cyan-400 hover:text-white transition-colors flex items-center gap-2 group/btn"
                  >
                    LEARN MORE
                    <span className="group-hover/btn:translate-x-2 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
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
            OUR <span className="text-cyan-400">PROCESS</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className="text-center p-4 sm:p-6"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 + 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl md:text-4xl font-neon font-black text-cyan-400 mb-3 sm:mb-4"
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 + 0.4, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {step.step}
                </motion.div>
                <motion.h3 
                  className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 + 0.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-cyan-100/60"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 + 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {step.description}
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
              READY TO <span className="text-cyan-400">START</span>
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-cyan-100/60 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Let's discuss your project and create something amazing together.
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
                GET STARTED
              </motion.a>
              <motion.a 
                href="/about" 
                className="bg-transparent border border-cyan-400 text-cyan-400 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-6 font-black text-sm sm:text-base md:text-lg tracking-widest uppercase transition-all hover:bg-cyan-400/10 hover:border-cyan-400 active:scale-95"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                LEARN MORE
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
