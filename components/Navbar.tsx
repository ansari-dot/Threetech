
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 border-b border-cyan-500/30 backdrop-blur-xl py-1' : 'bg-transparent py-3'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center gap-12 -ml-4 md:ml-16 relative">
          {/* Neon blue glow behind logo */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute w-20 h-20 md:w-32 md:h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
          </div>
          <img src="/assets/logo.png" alt="3novator" className="h-12 sm:h-16 md:h-20 w-auto relative z-10 drop-shadow-[0_0_15px_rgba(0,102,255,0.5)] pl-4 md:pl-0" />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10 text-xs font-bold tracking-widest uppercase">
          <a href="/" className="text-cyan-100 hover:text-cyan-400 hover:neon-text-blue transition-all">Home</a>
          <a href="/about" className="text-cyan-100 hover:text-cyan-400 hover:neon-text-blue transition-all">About</a>
          <a href="/services" className="text-cyan-100 hover:text-cyan-400 hover:neon-text-blue transition-all">Services</a>
          <a href="/contact" className="text-cyan-100 hover:text-cyan-400 hover:neon-text-blue transition-all">Contact</a>
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-transparent border border-cyan-400 text-cyan-400 px-6 lg:px-7 py-2 rounded-full font-bold tracking-widest uppercase text-xs transition-all hover:bg-cyan-400 hover:text-black neon-border-blue active:scale-95">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
        >
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          <a href="/" className="text-cyan-100 hover:text-cyan-400 hover:neon-text-blue transition-all text-sm font-bold tracking-widest uppercase py-2">Home</a>
          <a href="/about" className="text-cyan-100 hover:text-cyan-400 hover:neon-text-blue transition-all text-sm font-bold tracking-widest uppercase py-2">About</a>
          <a href="/services" className="text-cyan-100 hover:text-cyan-400 hover:neon-text-blue transition-all text-sm font-bold tracking-widest uppercase py-2">Services</a>
          <a href="/contact" className="text-cyan-100 hover:text-cyan-400 hover:neon-text-blue transition-all text-sm font-bold tracking-widest uppercase py-2">Contact</a>
          <button className="bg-transparent border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-bold tracking-widest uppercase text-xs transition-all hover:bg-cyan-400 hover:text-black neon-border-blue active:scale-95 mt-2">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
