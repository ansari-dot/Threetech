import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const CloudServices: React.FC = () => {
  const cloudProviders = [
    'AWS',
    'Azure',
    'Google Cloud Platform (GCP)'
  ];

  const services = [
    'Cloud Migration',
    'Serverless Architecture',
    'DevOps Implementation',
    'Container Orchestration',
    'Auto Scaling',
    'Security & Compliance'
  ];

  const features = [
    {
      title: 'Scalable Infrastructure',
      description: 'Cloud infrastructure that grows with your business needs.'
    },
    {
      title: 'High Availability',
      description: '99.9% uptime with automatic failover and disaster recovery.'
    },
    {
      title: 'Cost Optimization',
      description: 'Pay-as-you-go pricing with resource monitoring and optimization.'
    },
    {
      title: 'Global Reach',
      description: 'Deploy applications worldwide with CDN and edge computing.'
    },
    {
      title: 'Compliance Ready',
      description: 'GDPR, SOC 2, and industry standard compliance.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring.'
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
              CLOUD <span className="text-cyan-400">SERVICES</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cyan-100/60 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium border-l-2 border-cyan-500/30 pl-4 sm:pl-6 lg:pl-8">
              Scalable cloud infrastructure and migration services including AWS, Azure, and Google Cloud deployment, serverless architecture, and DevOps implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 lg:py-32 bg-black relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neon font-bold text-white tracking-widest">
                  CLOUD PROVIDERS
              </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cloudProviders.map((provider, idx) => (
              <div key={idx} className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-cyan-400 transition-all">
                <h3 className="text-base sm:text-lg lg:text-xl font-neon font-bold text-white mb-2 sm:mb-4">{provider}</h3>
                <p className="text-sm sm:text-base text-cyan-100/60">Enterprise-grade cloud solutions with 24/7 support and SLA guarantees.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neon font-bold mb-8 text-white tracking-widest text-center">
                CLOUD <span className="text-cyan-400">SERVICES</span>
            </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-cyan-400 transition-all">
                  <h3 className="text-base sm:text-lg lg:text-xl font-neon font-bold text-cyan-400 mb-3 sm:mb-4 uppercase tracking-widest">{service}</h3>
                  <p className="text-sm sm:text-base text-cyan-100/60">Comprehensive cloud solutions tailored to your business requirements.</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neon font-bold mb-8 text-white tracking-widest text-center">
                CLOUD <span className="text-cyan-400">FEATURES</span>
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
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a href="/contact" className="bg-cyan-400 text-black px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-6 font-black text-sm sm:text-base md:text-lg tracking-widest uppercase transition-all hover:scale-105 border border-cyan-400 active:scale-95">
                  START YOUR PROJECT
              </a>
              <a href="/services" className="bg-transparent border border-cyan-400 text-cyan-400 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-6 font-black text-sm sm:text-base md:text-lg tracking-widest uppercase transition-all hover:bg-cyan-400/10 hover:border-cyan-400 active:scale-95">
                  VIEW ALL SERVICES
              </a>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CloudServices;
