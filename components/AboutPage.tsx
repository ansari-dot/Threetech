import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import arsalan from '../assets/arsalan.jpeg';
import haris from '../assets/haris.jpeg';
import umar from '../assets/umar.jpeg';

const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: "2020",
      title: "3NOVATOR FOUNDED",
      description: "Started our journey in Abbottabad, KPK with a mission to transform businesses through technology."
    },
    {
      year: "2021",
      title: "FIRST MAJOR CLIENT",
      description: "Successfully delivered our first enterprise-level web application for a local business."
    },
    {
      year: "2022",
      title: "TEAM EXPANSION",
      description: "Grew our team to 10+ talented developers and designers, expanded our service offerings."
    },
    {
      year: "2023",
      title: "50+ PROJECTS MILESTONE",
      description: "Celebrated delivering over 50 successful projects across various industries."
    },
    {
      year: "2024",
      title: "AI & CLOUD SERVICES",
      description: "Launched our AI solutions and cloud services division to meet growing demand."
    },
    {
      year: "2026",
      title: "100+ PROJECTS ACHIEVED",
      description: "Reached our goal of 100+ successful projects with clients worldwide."
    }
  ];

  const team = [
    {
      img: haris,
      name: "Haris Hussain",
      role: "AI MODEL TRAINER",
      position: "CEO",
      description: "Expert in machine learning and AI model development with specialization in neural networks and deep learning frameworks."
    },
    {
      img:arsalan,
      name: "Arsalan Saleem",
      role: "WEB APP & CLOUD DEVELOPER",
      position: "CO-FOUNDER",
      description: "Full-stack developer specializing in small web apps, WordPress, and cloud services including Docker and AWS deployments."
    },
    {
      img: umar,
      name: "Umar Mustafa",
      position: "CO-FOUNDER",
      role: "WEB APP & WORDPRESS DEVELOPER",
      description: "Developer focused on small web applications and WordPress solutions with custom themes and plugin development."
    }
   
  ];

  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to push boundaries."
    },
    {
      title: "Quality",
      description: "Every project is crafted with attention to detail and commitment to excellence."
    },
    {
      title: "Collaboration",
      description: "We work closely with clients to understand their vision and exceed expectations."
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <motion.div 
        className="relative pt-24 sm:pt-28 md:pt-32 pb-16 px-4 sm:px-6 min-h-screen flex items-center overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="absolute top-1/4 -left-20 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-cyan-600/10 rounded-full blur-[120px] sm:blur-[150px] md:blur-[180px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />
        <div className="absolute bottom-0 -right-20 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px]"/>
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:text-8xl font-neon font-black leading-none tracking-tighter text-white mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              ABOUT <span className="text-cyan-400">3NOVATOR</span>
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-cyan-100/60 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium border-l-2 border-cyan-500/30 pl-4 sm:pl-6 lg:pl-8 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Building digital excellence from Abbottabad, KPK to world. We're a team of passionate developers, designers, and innovators committed to transforming businesses through technology.
            </motion.p>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-cyan-100/60 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Today, we're proud to be that trusted partner for businesses worldwide. Our team combines technical expertise in MERN, Django, Laravel, React Native, and Flutter with creative problem-solving to deliver solutions that not only meet but exceed expectations.
            </motion.p>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-neon font-black text-cyan-400">100+</div>
                <div className="text-xs sm:text-sm text-cyan-100/60 uppercase tracking-widest">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-neon font-black text-cyan-400">15+</div>
                <div className="text-xs sm:text-sm text-cyan-100/60 uppercase tracking-widest">Team Members</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Story Section */}
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
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="space-y-6 lg:space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                BUILDING DIGITAL EXCELLENCE
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base text-cyan-100/60 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                3novator embarked on its startup journey in 2024 with a bold vision to revolutionize digital experiences. Founded by passionate innovators, we set out to bridge the gap between cutting-edge technology and real-world business needs, starting from our base in Abbottabad, KPK.
              </motion.p>
              <motion.p 
                className="text-sm sm:text-base text-cyan-100/60 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                As a rapidly growing startup, we're already making waves in the tech industry. Our young, dynamic team combines expertise in MERN, Django, Laravel, React Native, and Flutter with innovative thinking to deliver solutions that exceed expectations. We're not just building software - we're shaping the future of technology.
              </motion.p>
              <motion.div 
                className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-3xl sm:text-4xl font-neon font-black text-cyan-400">20+</div>
                  <div className="text-xs sm:text-sm text-cyan-100/60 uppercase tracking-widest">Projects Delivered</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-3xl sm:text-4xl font-neon font-black text-cyan-400">8+</div>
                  <div className="text-xs sm:text-sm text-cyan-100/60 uppercase tracking-widest">Team Members</div>
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
                className="relative border border-cyan-400 p-3 sm:p-4 bg-cyan-950/50 backdrop-blur-sm rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team Working" 
                  className="w-full h-auto rounded-lg" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section - TEMPORARILY COMMENTED */}
      {/* <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neon font-bold mb-8 text-white tracking-widest text-center">
            OUR <span className="text-cyan-400">JOURNEY</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-cyan-500/30"></div>
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative flex items-start mb-8 sm:mb-10 md:mb-12 last:mb-0">
                  <div className="absolute left-4 sm:left-6 md:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full -translate-x-1/2"></div>
                  <div className="ml-12 sm:ml-16 md:ml-20">
                    <div className="text-lg sm:text-xl md:text-2xl font-neon font-bold text-cyan-400 mb-2">{milestone.year}</div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-sm sm:text-base text-cyan-100/60">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-neon font-bold mb-8 text-white tracking-widest text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              MEET OUR <span className="text-cyan-400">TEAM</span>
            </motion.h2>
          </motion.div>
          <div className="flex justify-center gap-6 lg:gap-8 overflow-x-auto pb-4 max-w-7xl mx-auto">
            {team.map((member, idx) => (
              <motion.div 
                key={idx} 
                className="bg-cyan-950/10 border border-cyan-500/20 rounded-lg p-4 sm:p-6 hover:border-cyan-400 transition-all flex-shrink-0 w-80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 + 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="text-center space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 + 0.4, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.img 
                    src={member.img}
                    alt={member.name} 
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto border-2 border-cyan-400/50 hover:border-cyan-400 transition-all object-cover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  {member.position && (
                    <motion.div 
                      className="text-cyan-300 text-xs sm:text-sm font-bold uppercase tracking-widest mb-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.2 + 0.65, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {member.position}
                    </motion.div>
                  )}
                  <motion.div 
                    className="text-cyan-400 text-xs sm:text-sm font-medium uppercase tracking-widest"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {member.role}
                  </motion.div>
                  <motion.p 
                    className="text-cyan-100/60 text-xs sm:text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {member.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
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
            OUR <span className="text-cyan-400">VALUES</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {values.map((value, idx) => (
              <motion.div 
                key={idx} 
                className="text-center p-4 sm:p-6"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 + 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl font-neon font-black text-cyan-400 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 + 0.4, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {value.title}
                </motion.div>
                <motion.p 
                  className="text-sm sm:text-base text-cyan-100/60"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 + 0.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {value.description}
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
              READY TO WORK <span className="text-cyan-400">WITH US</span>
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-cyan-100/60 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Let's build something amazing together. Contact us to discuss your project.
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
                GET IN TOUCH
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
                VIEW SERVICES
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default AboutPage;
