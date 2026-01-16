import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020617] border-t border-cyan-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[200px] bg-cyan-600/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[150px] bg-blue-600/5 rounded-full blur-[80px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="3novator" className="h-10 w-auto" />
              <div className="font-neon text-xl font-black text-cyan-400 tracking-wider">
                3NOVATOR
              </div>
            </div>
            <p className="text-cyan-100/40 text-sm leading-relaxed font-medium max-w-xs">
              Building digital excellence through innovative software solutions and cutting-edge technology.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-cyan-500/30 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all group">
                <svg className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-cyan-500/30 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all group">
                <svg className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-cyan-500/30 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all group">
                <svg className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="font-neon text-xs tracking-[0.4em] text-cyan-400 font-bold uppercase">
              Navigation
            </div>
            <ul className="space-y-3">
              <li><a href="/home" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm font-medium">Home</a></li>
              <li><a href="/about" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm font-medium">About Us</a></li>
              <li><a href="/services" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm font-medium">Services</a></li>
              <li><a href="/contact" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm font-medium">Contact</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="font-neon text-xs tracking-[0.4em] text-cyan-400 font-bold uppercase">
              Services
            </div>
            <ul className="space-y-3">
              <li><a href="/services/web-development" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm font-medium">Web Development</a></li>
              <li><a href="/services/app-development" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm font-medium">App Development</a></li>
              <li><a href="/services/wordpress-design" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm font-medium">WordPress & Design</a></li>
              <li><a href="/services/ai-solutions" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm font-medium">AI Solutions</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="font-neon text-xs tracking-[0.4em] text-cyan-400 font-bold uppercase">
              Contact
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="text-cyan-100/60 text-sm font-medium">Email</div>
                  <a href="mailto:info@3novator.com" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">info@3novator.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="text-cyan-100/60 text-sm font-medium">Phone</div>
                  <a href="tel:+1234567890" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">+1 (234) 567-890</a>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="w-full bg-transparent border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-bold tracking-widest uppercase text-xs transition-all hover:bg-cyan-400 hover:text-black neon-border-blue active:scale-95 hud-corner">
              Start Project
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-cyan-500/20 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-cyan-100/40 text-sm font-medium">
            © 2026 3novator. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-cyan-100/40 hover:text-cyan-400 transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-cyan-100/40 hover:text-cyan-400 transition-colors font-medium">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

