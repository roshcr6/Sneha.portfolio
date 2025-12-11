'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, MapPin, Calendar, Award } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import TimelineItem from '@/components/TimelineItem';
import { experiences, education, certifications } from '@/data/experience';
import { skillCategories } from '@/data/skills';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] bg-dark-300 border border-white/5 overflow-hidden">
                {/* Placeholder for photo */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-200 to-dark-400">
                  <span className="text-6xl font-bold text-white/10">SA</span>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-vermilion/30" />
                <div className="absolute bottom-4 left-4 w-20 h-20 border border-white/10" />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-vermilion p-6"
              >
                <span className="block text-3xl font-bold text-white">5+</span>
                <span className="text-xs text-white/80 font-mono">Years Exp</span>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-label">About Me</span>
              <h1 className="text-4xl md:text-5xl font-bold text-surface mb-6">
                Sneha Aravind
              </h1>
              
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-neutral/60">
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-vermilion" />
                  Bangalore, India
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-vermilion" />
                  Available for Work
                </span>
              </div>
              
              <p className="text-neutral/70 leading-relaxed mb-6">
                I'm a passionate Game Developer with expertise in Unity, Unreal Engine, and AI/ML integration. 
                With over 5 years of experience creating immersive digital experiences, I specialize in 
                procedural generation, intelligent NPC systems, and high-performance game mechanics.
              </p>
              
              <p className="text-neutral/70 leading-relaxed mb-8">
                My journey in game development started with a fascination for how virtual worlds 
                could evoke real emotions. Today, I combine technical excellence with creative vision 
                to build experiences that captivate players and push the boundaries of interactive entertainment.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  <span className="flex items-center gap-2">
                    Get In Touch
                    <ArrowRight size={18} />
                  </span>
                </Link>
                <a href="/resume.pdf" className="btn-ghost">
                  <span className="flex items-center gap-2">
                    <Download size={18} />
                    Download CV
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section-padding bg-dark-400">
        <div className="container-main">
          <SectionHeader
            label="Expertise"
            title="Core Competencies"
            description="A snapshot of my technical skills and areas of specialization."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-dark-300 border border-white/5 text-center group hover:border-vermilion/30 transition-colors"
              >
                <category.icon
                  size={32}
                  className="mx-auto mb-4 text-neutral/40 group-hover:text-vermilion transition-colors"
                />
                <h4 className="text-sm font-medium text-surface">{category.title}</h4>
                <span className="text-xs text-neutral/40 font-mono mt-1 block">
                  {category.skills.length} skills
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/skills" className="btn-ghost inline-flex">
              <span className="flex items-center gap-2">
                View All Skills
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <SectionHeader
                label="Career"
                title="Experience"
              />
              
              <div className="mt-8">
                {experiences.map((exp, index) => (
                  <TimelineItem
                    key={exp.id}
                    title={exp.title}
                    subtitle={`${exp.company} • ${exp.location}`}
                    period={exp.period}
                    description={exp.description}
                    achievements={exp.achievements}
                    index={index}
                    isLast={index === experiences.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <SectionHeader
                label="Background"
                title="Education"
              />
              
              <div className="mt-8">
                {education.map((edu, index) => (
                  <TimelineItem
                    key={edu.id}
                    title={edu.degree}
                    subtitle={edu.institution}
                    period={edu.period}
                    description={edu.grade ? `Grade: ${edu.grade}` : undefined}
                    achievements={edu.achievements}
                    index={index}
                    isLast={index === education.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-dark-400">
        <div className="container-main">
          <SectionHeader
            label="Credentials"
            title="Certifications"
            description="Professional certifications and credentials that validate my expertise."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-dark-300 border border-white/5 hover:border-vermilion/30 transition-all"
              >
                <Award
                  size={24}
                  className="text-vermilion mb-4"
                />
                <h4 className="text-base font-medium text-surface mb-2 group-hover:text-vermilion transition-colors">
                  {cert.name}
                </h4>
                <p className="text-sm text-neutral/50 mb-3">{cert.issuer}</p>
                <span className="font-mono text-xs text-neutral/40">{cert.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="section-title mb-6">Interested in Working Together?</h2>
            <p className="text-neutral/60 mb-8">
              I'm always open to discussing new projects and creative challenges.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              <span className="flex items-center gap-2">
                Start a Conversation
                <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
