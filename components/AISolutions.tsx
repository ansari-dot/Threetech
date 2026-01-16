import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const AISolutions: React.FC = () => {
  const aiCapabilities = [
    'Machine Learning',
    'Chatbots',
    'Computer Vision',
    'Predictive Analytics',
    'Automation',
    'Natural Language'
  ];

  const features = [
    {
      title: 'AI-Powered Insights',
      description: 'Advanced analytics for forecasting and business intelligence.'
    },
    {
      title: 'Intelligent Automation',
      description: 'Workflow automation and process optimization with AI.'
    },
    {
      title: 'Natural Language Processing',
      description: 'NLP for text analysis, sentiment, and language processing.'
    },
    {
      title: 'Computer Vision',
      description: 'Image recognition and analysis for automated visual processing.'
    },
    {
      title: 'Predictive Analytics',
      description: 'Advanced analytics for forecasting and business intelligence.'
    },
    {
      title: 'Custom AI Models',
      description: 'Tailored ML models for prediction, classification, and data analysis.'
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 px-4 sm:px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-purple-600/10 rounded-full blur-[120px] sm:blur-[150px] md:blur-[180px]"></div>
        <div className="absolute bottom-0 -right-20 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px]"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:text-8xl font-neon font-black leading-none tracking-tighter text-white mb-6 sm:mb-8">
              AI <span className="text-cyan-400">SOLUTIONS</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cyan-100/60 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium border-l-2 border-cyan-500/30 pl-4 sm:pl-6 lg:pl-8">
              Cutting-edge artificial intelligence and machine learning solutions including chatbots, predictive analytics, computer vision, and automation to optimize your business processes.
            </p>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 lg:py-32 bg-black relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(128,0,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neon font-bold text-white tracking-widest">
                AI <span className="text-cyan-400">CAPABILITIES</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {aiCapabilities.map((capability, idx) => (
              <div key={idx} className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-purple-400 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-14 lg:w-16 lg:h-16 bg-purple-400/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <svg className="w-4 h-4 sm:w-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-neon font-bold text-white mb-2 sm:mb-3">{capability}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neon font-bold mb-8 text-white tracking-widest text-center">
                AI <span className="text-cyan-400">FEATURES</span>
            </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-purple-400 transition-all">
                  <h3 className="text-base sm:text-lg lg:text-xl font-neon font-bold text-cyan-400 mb-3 sm:mb-4 uppercase tracking-widest">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-cyan-100/60">{feature.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-black relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(128,0,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-neon font-bold mb-6 sm:mb-8 text-white tracking-widest">
                  READY TO INTEGRATE <span className="text-cyan-400">AI</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-cyan-100/60 mb-8 sm:mb-12">
                  Let's transform your business with cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a href="/contact" className="bg-cyan-400 text-black px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-6 font-black text-sm sm:text-base md:text-lg tracking-widest uppercase transition-all hover:scale-105 border border-cyan-400 active:scale-95">
                  START YOUR PROJECT
              </a>
              <a href="/services" className="bg-transparent border border-cyan-400 text-cyan-400 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-6 font-black text-sm sm:text-base md:text-lg tracking-widest uppercase transition-all hover:bg-cyan-400/10 hover:border-cyan-400 active:scale-95">
                  VIEW ALL SERVICES
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AISolutions;
