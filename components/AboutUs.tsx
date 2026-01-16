import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "HARIS HUSSAIN",
      role: "AI MODEL TRAINER",
      description: "Expert in machine learning and AI model development with specialization in neural networks and deep learning frameworks.",
      img: "https://i.pravatar.cc/150?u=haris"
    },
    {
      name: "ARSALAN SALEEM",
      role: "WEB APP & CLOUD DEVELOPER",
      description: "Full-stack developer specializing in small web apps, WordPress, and cloud services including Docker and AWS deployments.",
      img: "https://i.pravatar.cc/150?u=arsalan"
    },
    {
      name: "UMAR MUSTAFA",
      role: "WEB APP & WORDPRESS DEVELOPER",
      description: "Developer focused on small web applications and WordPress solutions with custom themes and plugin development.",
      img: "https://i.pravatar.cc/150?u=umar"
    }
  ];

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

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]"></div>

        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-8xl font-neon font-black leading-none tracking-tighter text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              ABOUT <span className="text-cyan-400 neon-text">3NOVATOR</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-cyan-100/60 max-w-3xl mx-auto leading-relaxed font-medium border-l-2 border-cyan-500/30 pl-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              We are a team of passionate developers, designers, and innovators based in Abbottabad, KPK, Pakistan. Founded in 2020, we've helped over 100 companies worldwide achieve their digital goals through cutting-edge technology solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-7xl font-neon font-bold mb-8 text-white tracking-widest">
              OUR <span className="text-cyan-400 neon-text-blue">STORY</span>
            </h2>
            <p className="text-cyan-100/60 text-lg uppercase tracking-widest font-bold">
              From a small startup to a trusted technology partner
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-3xl font-neon font-bold text-cyan-400 uppercase tracking-widest">
                BUILDING DIGITAL EXCELLENCE
              </h3>
              <p className="text-cyan-100/60 leading-relaxed">
                3novator started in 2020 with a simple mission: to bridge the gap between businesses and technology. Our founders, based in Abbottabad, KPK, recognized that many companies struggled to find reliable, innovative tech solutions that actually delivered results.
              </p>
              <p className="text-cyan-100/60 leading-relaxed">
                Today, we're proud to be that trusted partner for businesses worldwide. Our team combines technical expertise in MERN, Django, Laravel, React Native, and Flutter with creative problem-solving to deliver solutions that not only meet but exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-neon font-black text-cyan-400">100+</div>
                  <div className="text-sm text-cyan-100/60 uppercase tracking-widest">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-neon font-black text-cyan-400">15+</div>
                  <div className="text-sm text-cyan-100/60 uppercase tracking-widest">Team Members</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative z-20 neon-border p-4 bg-cyan-950/50 backdrop-blur-sm rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team working" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section - TEMPORARILY COMMENTED */}
      {/* <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-7xl font-neon font-bold mb-8 text-white tracking-widest">
              OUR <span className="text-cyan-400 neon-text-blue">JOURNEY</span>
            </h2>
            <p className="text-cyan-100/60 text-lg uppercase tracking-widest font-bold">
              Key milestones in our growth
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx} 
                className="flex gap-8 mb-16 items-center"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex-shrink-0">
                  <div className="text-5xl font-neon font-black text-cyan-400 neon-text-blue">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow border-l-2 border-cyan-500/20 pl-8">
                  <h3 className="text-2xl font-neon font-bold text-white mb-2 uppercase tracking-widest">
                    {milestone.title}
                  </h3>
                  <p className="text-cyan-100/60">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-7xl font-neon font-bold mb-8 text-white tracking-widest">
              MEET OUR <span className="text-cyan-400 neon-text-blue">TEAM</span>
            </h2>
            <p className="text-cyan-100/60 text-lg uppercase tracking-widest font-bold">
              The talented people behind 3novator
            </p>
          </motion.div>

          <div className="flex justify-center gap-8 overflow-x-auto pb-4 max-w-7xl mx-auto">
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx} 
                className="group relative p-8 bg-cyan-950/10 border border-cyan-500/20 rounded-lg hover:border-cyan-400 transition-all duration-500 flex-shrink-0 w-80"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-center space-y-6">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-all"
                  />
                  <div>
                    <h3 className="text-xl font-neon font-bold text-cyan-400 neon-text-blue uppercase tracking-widest">
                      {member.name}
                    </h3>
                    <p className="text-sm text-cyan-100/60 uppercase tracking-widest mb-4">
                      {member.role}
                    </p>
                    <p className="text-cyan-100/40 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-7xl font-neon font-bold mb-8 text-white tracking-widest">
              OUR <span className="text-cyan-400 neon-text-blue">VALUES</span>
            </h2>
            <p className="text-cyan-100/60 text-lg uppercase tracking-widest font-bold">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div 
              className="p-10 border border-cyan-400/20 rounded-lg hover:border-cyan-400 transition-all duration-700 bg-cyan-950/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <div className="text-cyan-400 font-neon text-4xl mb-6">01</div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-widest uppercase">INNOVATION</h3>
              <p className="text-cyan-100/50 text-sm leading-relaxed uppercase tracking-tighter">
                We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-10 border border-cyan-400/20 rounded-lg hover:border-cyan-400 transition-all duration-700 bg-cyan-950/5 lg:-translate-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <div className="text-cyan-400 font-neon text-4xl mb-6">02</div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-widest uppercase">QUALITY</h3>
              <p className="text-cyan-100/50 text-sm leading-relaxed uppercase tracking-tighter">
                Every line of code, every design element is crafted with precision and attention to detail.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-10 border border-cyan-400/20 rounded-lg hover:border-cyan-400 transition-all duration-700 bg-cyan-950/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <div className="text-cyan-400 font-neon text-4xl mb-6">03</div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-widest uppercase">CLIENT SUCCESS</h3>
              <p className="text-cyan-100/50 text-sm leading-relaxed uppercase tracking-tighter">
                Your success is our success. We're committed to delivering results that exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
