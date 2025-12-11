'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { achievements, achievementsByCategory } from '@/data/achievements';

const categoryLabels: Record<string, string> = {
  hackathon: 'Hackathons',
  award: 'Awards',
  certification: 'Certifications',
  honor: 'Honors',
  competition: 'Competitions',
};

export default function AchievementsPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            label="Recognition"
            title="Achievements"
            description="Milestones, awards, and certifications that mark my professional journey."
          />

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { number: '5+', label: 'Awards Won' },
              { number: '3', label: 'Hackathon Wins' },
              { number: '4', label: 'Certifications' },
              { number: '10+', label: 'Events' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-dark-300 border border-white/5 text-center"
              >
                <span className="block text-3xl font-bold text-vermilion mb-1">
                  {stat.number}
                </span>
                <span className="text-xs text-neutral/50 font-mono">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* All Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.article
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 bg-dark-200 border border-white/5 hover:border-vermilion/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-dark-300 border border-white/5 group-hover:border-vermilion/50 transition-colors">
                    <achievement.icon
                      size={24}
                      className="text-vermilion"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-semibold text-surface group-hover:text-vermilion transition-colors">
                        {achievement.title}
                      </h3>
                      <span className="flex-shrink-0 px-2 py-1 text-xs font-mono text-neutral/40 bg-dark-400 border border-white/5">
                        {categoryLabels[achievement.category]}
                      </span>
                    </div>
                    
                    <p className="text-sm text-neutral/50 mb-3 leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    <span className="font-mono text-xs text-vermilion">
                      {achievement.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Highlight */}
      <section className="section-padding bg-dark-400">
        <div className="container-main">
          <SectionHeader
            label="Credentials"
            title="Professional Certifications"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {achievementsByCategory.certification.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 bg-dark-300 border border-white/5 hover:border-vermilion/30 transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-vermilion/30 group-hover:border-vermilion transition-colors">
                  <cert.icon size={32} className="text-vermilion" />
                </div>
                
                <h4 className="text-base font-medium text-surface mb-2">
                  {cert.title}
                </h4>
                
                <span className="font-mono text-xs text-neutral/40">
                  {cert.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              label="Timeline"
              title="Key Moments"
              align="center"
            />

            <div className="mt-12 relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-vermilion via-vermilion/50 to-transparent -translate-x-1/2" />

              {achievements.slice(0, 5).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h4 className="text-lg font-semibold text-surface mb-1">
                      {item.title}
                    </h4>
                    <span className="font-mono text-xs text-vermilion">
                      {item.date}
                    </span>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="w-4 h-4 bg-vermilion flex-shrink-0" />
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-400">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="section-title mb-6">Let's Create Something Award-Worthy</h2>
            <p className="text-neutral/60 mb-8">
              Ready to build the next big thing? Let's collaborate and create something amazing.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              <span className="flex items-center gap-2">
                Get In Touch
                <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
