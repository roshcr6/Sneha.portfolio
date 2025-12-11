'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  ArrowRight, 
  ArrowDown, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Calendar, 
  Award,
  Download,
  ExternalLink,
  Send,
  CheckCircle,
  Loader2,
  ArrowUpRight,
  Twitter
} from 'lucide-react';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { experiences, education, certifications } from '@/data/experience';
import { achievements } from '@/data/achievements';
import TerminalAnimation from '@/components/TerminalAnimation';
import ScrollReveal from '@/components/ScrollReveal';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-bg opacity-5" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(245,245,245,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(245,245,245,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/50 to-charcoal" />
      </div>

      <div className="relative z-10 container-main text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block font-mono text-xs tracking-ultra-wide text-vermilion mb-8 glow-red"
        >
          CYBER SECURITY SPECIALIST
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-surface font-bold tracking-wider mb-6 float-animation"
        >
          <span className="block">SNEHA</span>
          <span className="block gradient-text">ARAVIND</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-neutral/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Securing digital landscapes through ethical hacking, network security,
          and cutting-edge cloud security solutions.
        </motion.p>

        {/* Terminal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <TerminalAnimation />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#projects" className="btn-primary glow-red-hover">
            <span className="flex items-center gap-2">
              View Projects
              <ArrowRight size={18} />
            </span>
          </a>
          <a href="#contact" className="btn-ghost">
            <span>Contact Me</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/snehaaravind', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/sneha-aravind-8b7b2832a', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:u2403248@rajagiri.edu.in', label: 'Email' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              className="glass-card w-12 h-12 flex items-center justify-center border border-white/10 text-neutral/40 hover:border-vermilion hover:text-vermilion transition-all duration-300 glow-red-hover"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral/30 hover:text-vermilion transition-colors cursor-pointer"
        >
          <span className="font-mono text-xs tracking-wider">SCROLL</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}

// ============================================
// ABOUT SECTION
// ============================================
function AboutSection() {
  return (
    <section id="about" className="section-padding bg-dark-400">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] bg-dark-300 border border-white/5 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-200 to-dark-400">
                <span className="text-6xl font-bold text-white/10">SA</span>
              </div>
              <div className="absolute top-4 right-4 w-20 h-20 border border-vermilion/30" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border border-white/10" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-vermilion p-6"
            >
              <span className="block text-3xl font-bold text-white">8.5</span>
              <span className="text-xs text-white/80 font-mono">GPA</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label">About Me</span>
            <h2 className="section-title">Sneha Aravind</h2>
            
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-neutral/60 mt-4">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-vermilion" />
                Eranakulam, Kerala
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-vermilion" />
                B.Tech 2024-2028
              </span>
            </div>
            
            <p className="text-neutral/70 leading-relaxed mb-6">
              I'm a detail-oriented Computer Science Engineering student specializing in Cyber Security 
              at Rajagiri School of Engineering and Technology. Skilled in network security, ethical hacking, 
              and secure software development with hands-on experience from internships at Cisco and Microsoft.
            </p>
            
            <p className="text-neutral/70 leading-relaxed mb-8">
              My passion for cyber security drives me to constantly explore new vulnerabilities, 
              develop secure solutions, and stay ahead of emerging threats. I combine strong 
              problem-solving abilities with technical expertise to protect digital assets.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                <span className="flex items-center gap-2">
                  Get In Touch
                  <ArrowRight size={18} />
                </span>
              </a>
              <a href="/resume.pdf" className="btn-ghost">
                <span className="flex items-center gap-2">
                  <Download size={18} />
                  Download CV
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-label">Career</span>
              <h3 className="text-2xl font-bold text-surface mb-8">Experience</h3>
            </motion.div>
            
            <div>
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 pb-10 last:pb-0"
                >
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-[3px] top-3 bottom-0 w-px bg-gradient-to-b from-vermilion/50 to-transparent" />
                  )}
                  <div className="absolute left-0 top-1.5 w-2 h-2 bg-vermilion" />
                  <span className="inline-block font-mono text-xs text-vermilion mb-2">{exp.period}</span>
                  <h4 className="text-lg font-semibold text-surface mb-1">{exp.title}</h4>
                  <p className="text-sm text-neutral/60 mb-3">{exp.company} • {exp.location}</p>
                  {exp.achievements && (
                    <ul className="space-y-1.5">
                      {exp.achievements.slice(0, 2).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral/50">
                          <span className="text-vermilion mt-1">—</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-label">Background</span>
              <h3 className="text-2xl font-bold text-surface mb-8">Education</h3>
            </motion.div>
            
            <div>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 pb-10 last:pb-0"
                >
                  {index !== education.length - 1 && (
                    <div className="absolute left-[3px] top-3 bottom-0 w-px bg-gradient-to-b from-vermilion/50 to-transparent" />
                  )}
                  <div className="absolute left-0 top-1.5 w-2 h-2 bg-vermilion" />
                  <span className="inline-block font-mono text-xs text-vermilion mb-2">{edu.period}</span>
                  <h4 className="text-lg font-semibold text-surface mb-1">{edu.degree}</h4>
                  <p className="text-sm text-neutral/60 mb-2">{edu.institution}</p>
                  {edu.grade && <p className="text-sm text-neutral/40">Grade: {edu.grade}</p>}
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12">
              <h4 className="text-sm font-semibold text-surface uppercase tracking-wider mb-4">Certifications</h4>
              <div className="grid grid-cols-2 gap-3">
                {certifications.slice(0, 4).map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-3 bg-dark-300 border border-white/5 hover:border-vermilion/30 transition-colors"
                  >
                    <Award size={16} className="text-vermilion mb-2" />
                    <p className="text-xs font-medium text-surface line-clamp-2">{cert.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PROJECTS SECTION
// ============================================
function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'security', label: 'Security' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'tool', label: 'Tools' },
  ];

  const filteredProjects = activeCategory === 'all' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Projects</h2>
          <p className="text-neutral/60 max-w-2xl mt-4">A collection of my work spanning cyber security, cloud security, and security tools.</p>
          <div className="section-divider" />
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category.id ? 'bg-vermilion text-white' : 'bg-dark-300 text-neutral/60 hover:text-surface border border-white/5'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-dark-200 border border-white/5 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden bg-dark-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white/10">{project.title.charAt(0)}</span>
                </div>
                <div className="absolute top-4 right-4 font-mono text-xs text-white/30">{String(index + 1).padStart(2, '0')}</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-surface mb-2 group-hover:text-vermilion transition-colors">{project.title}</h3>
                <p className="text-sm text-neutral/50 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-mono text-neutral/40 bg-dark-400">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral/50 hover:text-surface transition-colors">
                      <Github size={16} /><span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral/50 hover:text-vermilion transition-colors">
                      <ExternalLink size={16} /><span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-all group-hover:border-vermilion">
                <ArrowUpRight size={18} className="text-vermilion" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// SKILLS SECTION
// ============================================
function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-padding bg-dark-400" ref={ref}>
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-12">
            <span className="section-label">Expertise</span>
            <h2 className="section-title gradient-text">Skills & Technologies</h2>
            <p className="text-neutral/60 max-w-2xl mt-4">A comprehensive overview of my technical proficiencies across various domains.</p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        {/* Bento Grid Layout */}
        <div className="bento-grid">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.id} delay={catIndex * 0.1}>
              <div className={`glass-card glass-card-hover p-6 ${catIndex === 0 ? 'bento-item-large' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center glass-card border border-vermilion/20 glow-red">
                    <category.icon size={24} className="text-vermilion" />
                  </div>
                  <h3 className="text-xl font-semibold text-surface">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-surface text-sm">{skill.name}</span>
                        <span className="font-mono text-xs text-vermilion">
                          {inView ? <CountUp end={skill.level} duration={2} />  : 0}%
                        </span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                          className="progress-fill"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Interactive Tools */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 glass-card p-8 text-center gradient-border">
            <h3 className="text-lg font-semibold text-surface mb-6">Tools I Use Daily</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Kali Linux', 'Wireshark', 'Packet Tracer', 'Azure', 'VS Code', 'Git', 'Python', 'Java', 'MySQL', 'Django'].map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ delay: index * 0.03 }}
                  className="px-4 py-2 glass-card border border-white/5 text-sm text-neutral/60 hover:border-vermilion/50 hover:text-surface transition-all glow-red-hover"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ============================================
// ACHIEVEMENTS SECTION
// ============================================
function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <span className="section-label">Recognition</span>
          <h2 className="section-title">Achievements</h2>
          <p className="text-neutral/60 max-w-2xl mt-4">Milestones, awards, and certifications that mark my professional journey.</p>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { number: '8.5', label: 'GPA' },
            { number: '2', label: 'Internships' },
            { number: '2', label: 'Certifications' },
            { number: '6+', label: 'Projects' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-dark-300 border border-white/5 text-center"
            >
              <span className="block text-3xl font-bold text-vermilion mb-1">{stat.number}</span>
              <span className="text-xs text-neutral/50 font-mono">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.slice(0, 6).map((achievement, index) => (
            <motion.article
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 bg-dark-200 border border-white/5 hover:border-vermilion/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-dark-300 border border-white/5 group-hover:border-vermilion/50 transition-colors">
                  <achievement.icon size={24} className="text-vermilion" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-surface mb-1 group-hover:text-vermilion transition-colors">{achievement.title}</h3>
                  <p className="text-sm text-neutral/50 mb-2 line-clamp-2">{achievement.description}</p>
                  <span className="font-mono text-xs text-vermilion">{achievement.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION
// ============================================
function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-dark-400">
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-neutral/60 max-w-2xl mt-4">Have a project in mind or want to collaborate? I'd love to hear from you.</p>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.form initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-neutral/60 mb-2">Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="Your name" className="w-full" />
              </div>
              <div>
                <label className="block text-sm text-neutral/60 mb-2">Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="your.email@example.com" className="w-full" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-neutral/60 mb-2">Message</label>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={6} placeholder="Tell me about your project..." className="w-full resize-none" />
            </div>
            <button type="submit" disabled={status === 'loading'} className="btn-primary w-full md:w-auto">
              <span className="flex items-center gap-2">
                {status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : status === 'success' ? <><CheckCircle size={18} /> Message Sent!</> : <><Send size={18} /> Send Message</>}
              </span>
            </button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: 'Email', value: 'u2403248@rajagiri.edu.in', href: 'mailto:u2403248@rajagiri.edu.in' },
                { icon: MapPin, label: 'Location', value: 'Eranakulam, Kerala', href: null },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-4 p-5 bg-dark-300 border border-white/5">
                  <div className="w-12 h-12 flex items-center justify-center bg-dark-400 border border-white/5">
                    <info.icon size={20} className="text-vermilion" />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral/40 font-mono uppercase">{info.label}</span>
                    {info.href ? <a href={info.href} className="text-surface hover:text-vermilion transition-colors">{info.value}</a> : <span className="text-surface">{info.value}</span>}
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-sm font-semibold text-surface uppercase tracking-wider mb-4">Social Profiles</h4>
            <div className="space-y-3">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/snehaaravind', handle: '@snehaaravind' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sneha-aravind-8b7b2832a', handle: '/in/sneha-aravind' },
                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/snehaaravind', handle: '@snehaaravind' },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-dark-300 border border-white/5 hover:border-vermilion/30 transition-all">
                  <div className="flex items-center gap-3">
                    <social.icon size={18} className="text-neutral/40 group-hover:text-vermilion transition-colors" />
                    <div>
                      <span className="block text-sm font-medium text-surface">{social.label}</span>
                      <span className="text-xs text-neutral/40 font-mono">{social.handle}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-neutral/20 group-hover:text-vermilion transition-colors" />
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 border border-vermilion/30 bg-vermilion/5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-surface">Open to Opportunities</span>
              </div>
              <p className="text-sm text-neutral/60">Currently pursuing B.Tech and open to internships, projects, and learning opportunities in cyber security.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
