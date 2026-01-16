import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      title: "Phone",
      content: "+92 300 1234567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: "Email",
      content: "info@threetech.com",
      description: "Send us your query anytime"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: "Location",
      content: "Abbottabad, KPK, Pakistan",
      description: "Visit our office"
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
              CONTACT <span className="text-cyan-400">US</span>
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-cyan-100/60 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium border-l-2 border-cyan-500/30 pl-4 sm:pl-6 lg:pl-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Ready to start your next project? Get in touch with our team and let's discuss how we can help transform your ideas into reality.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
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
            className="grid lg:grid-cols-2 gap-8 lg:gap-16"
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
                GET IN TOUCH
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base text-cyan-100/60 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Have a project in mind? We'd love to hear about it. Fill out form and our team will get back to you within 24 hours.
              </motion.p>
              
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-cyan-100 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-cyan-950/10 border border-cyan-500/20 rounded-lg text-white placeholder-cyan-100/40 focus:outline-none focus:border-cyan-400 focus:bg-cyan-950/20 transition-all text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-cyan-100 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-cyan-950/10 border border-cyan-500/20 rounded-lg text-white placeholder-cyan-100/40 focus:outline-none focus:border-cyan-400 focus:bg-cyan-950/20 transition-all text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-cyan-100 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-cyan-950/10 border border-cyan-500/20 rounded-lg text-white placeholder-cyan-100/40 focus:outline-none focus:border-cyan-400 focus:bg-cyan-950/20 transition-all text-sm sm:text-base"
                    placeholder="Project Inquiry"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-cyan-100 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-cyan-950/10 border border-cyan-500/20 rounded-lg text-white placeholder-cyan-100/40 focus:outline-none focus:border-cyan-400 focus:bg-cyan-950/20 transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project..."
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-cyan-400 text-black px-6 sm:px-8 py-3 sm:py-4 font-black text-sm sm:text-base md:text-lg tracking-widest uppercase transition-all hover:scale-105 border border-cyan-400 active:scale-95"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SEND MESSAGE
                </motion.button>
              </motion.form>
            </motion.div>
            
            <motion.div 
              className="space-y-6 lg:space-y-8 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl font-neon font-bold text-cyan-400 uppercase tracking-widest"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                CONTACT INFO
              </motion.h2>
              
              <motion.div 
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {contactInfo.map((info, idx) => (
                  <motion.div 
                    key={idx} 
                    className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6 hover:border-cyan-400 transition-all"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 + 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div 
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 + 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <div className="text-cyan-400 w-4 h-4 sm:w-6 sm:h-6">{info.icon}</div>
                      </motion.div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">{info.title}</h3>
                        <p className="text-sm sm:text-base text-cyan-100 font-medium mb-1">{info.content}</p>
                        <p className="text-xs sm:text-sm text-cyan-100/60">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm text-cyan-100">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm text-cyan-100">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm text-cyan-100/60">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section */}
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
            FIND <span className="text-cyan-400">US</span>
          </motion.h2>
          <motion.div 
            className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center px-4">
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4"
                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </motion.div>
              <p className="text-sm sm:text-base text-cyan-100/60">Abbottabad, KPK, Pakistan</p>
              <p className="text-xs sm:text-sm text-cyan-100/40 mt-2">Interactive map will be displayed here</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default ContactPage;
