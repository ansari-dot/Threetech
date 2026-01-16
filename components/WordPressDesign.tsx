import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import word from '../assets/services/word.jpg';

const WordPressDesign: React.FC = () => {
  const designServices = [
    'Custom Themes',
    'Plugin Development', 
    'WooCommerce',
    'Multi-site Setup'
  ];

  const designTools = [
    'Figma',
    'Adobe XD',
    'Sketch',
    'Photoshop'
  ];

  const features = [
    {
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect display on all devices and screen sizes.'
    },
    {
      title: 'SEO Optimized',
      description: 'WordPress sites built with best SEO practices for better search rankings.'
    },
    {
      title: 'E-commerce Ready',
      description: 'Full WooCommerce integration for online stores with payment gateways.'
    },
    {
      title: 'Custom Plugins',
      description: 'Tailored WordPress plugins to extend functionality as needed.'
    },
    {
      title: 'Performance',
      description: 'Optimized for speed with caching, image optimization, and clean code.'
    },
    {
      title: 'Brand Identity',
      description: 'Complete brand guidelines and visual identity development.'
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 px-4 sm:px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-cyan-600/10 rounded-full blur-[120px] sm:blur-[150px] md:blur-[180px]"></div>
        <div className="absolute bottom-0 -right-20 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px]"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:text-8xl font-neon font-black leading-none tracking-tighter text-white mb-6 sm:mb-8">
              WORDPRESS & <span className="text-cyan-400">DESIGN</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cyan-100/60 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium border-l-2 border-cyan-500/30 pl-4 sm:pl-6 lg:pl-8">
              Professional WordPress websites with custom themes, plugins, and stunning visual design using modern UI/UX principles and responsive design.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 lg:py-32 bg-black relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-neon font-bold text-cyan-400 uppercase tracking-widest">
                  DESIGN SERVICES
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-neon font-bold text-white mb-3 sm:mb-4">WordPress Development</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {designServices.map((service, idx) => (
                      <div key={idx} className="text-sm sm:text-base text-cyan-100/60">{service}</div>
                    ))}
                  </div>
                </div>
                <div className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-neon font-bold text-white mb-3 sm:mb-4">UI/UX Design</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div className="text-sm sm:text-base text-cyan-100/60">• Wireframing</div>
                    <div className="text-sm sm:text-base text-cyan-100/60">• Prototyping</div>
                    <div className="text-sm sm:text-base text-cyan-100/60">• User Research</div>
                    <div className="text-sm sm:text-base text-cyan-100/60">• A/B Testing</div>
                  </div>
                </div>
                <div className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-neon font-bold text-white mb-3 sm:mb-4">Design Tools</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {designTools.map((tool, idx) => (
                      <div key={idx} className="text-sm sm:text-base text-cyan-100/60">{tool}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="relative border border-cyan-400 p-3 sm:p-4 bg-cyan-950/50 backdrop-blur-sm rounded-lg overflow-hidden">
                <img 
                  src={word}
                  alt="WordPress Design" 
                  className="w-full h-auto rounded-lg"
                  style={{ width: '1000px', height: '550px', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neon font-bold mb-8 text-white tracking-widest text-center">
                DESIGN <span className="text-cyan-400">FEATURES</span>
            </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-cyan-400 transition-all">
                  <h3 className="text-base sm:text-lg lg:text-xl font-neon font-bold text-cyan-400 mb-3 sm:mb-4 uppercase tracking-widest">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-cyan-100/60">{feature.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-black relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-neon font-bold mb-6 sm:mb-8 text-white tracking-widest">
                  READY TO DESIGN <span className="text-cyan-400">YOUR SITE</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-cyan-100/60 mb-8 sm:mb-12">
                  Let's create a stunning WordPress website that represents your brand perfectly.
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

export default WordPressDesign;
