'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import { skillCategories } from '@/data/skills';

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            label="Expertise"
            title="Skills & Technologies"
            description="A comprehensive overview of my technical proficiencies across various domains."
          />

          <div className="space-y-16">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-dark-300 border border-white/5">
                    <category.icon size={24} className="text-vermilion" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-surface">
                      {category.title}
                    </h3>
                    <span className="text-sm text-neutral/40 font-mono">
                      {category.skills.length} technologies
                    </span>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className="group p-5 bg-dark-200 border border-white/5 hover:border-vermilion/30 transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-surface group-hover:text-vermilion transition-colors">
                          {skill.name}
                        </h4>
                        <span className="font-mono text-xs text-neutral/40">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-1 bg-dark-400 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.05 }}
                          className="h-full bg-gradient-to-r from-vermilion to-vermilion/50"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding bg-dark-400">
        <div className="container-main">
          <SectionHeader
            label="Stack"
            title="Tools I Use Daily"
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {[
              'Unity',
              'Unreal Engine',
              'Visual Studio',
              'VS Code',
              'Git',
              'Blender',
              'Photoshop',
              'Figma',
              'Notion',
              'Jira',
              'Docker',
              'AWS',
              'Firebase',
              'TensorFlow',
              'Python',
              'C#',
              'C++',
              'TypeScript',
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -4, borderColor: 'rgba(230, 57, 70, 0.5)' }}
                className="px-5 py-3 bg-dark-300 border border-white/5 text-sm font-medium text-neutral/70 hover:text-surface transition-all cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Growth</span>
              <h2 className="section-title">Always Learning</h2>
              <p className="text-neutral/60 leading-relaxed mt-4">
                Technology evolves rapidly, and staying current is essential. I dedicate time 
                each week to exploring new tools, frameworks, and methodologies. Currently 
                focused on advancing my knowledge in:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { label: 'Procedural Animation', progress: 60 },
                { label: 'Multiplayer Networking', progress: 70 },
                { label: 'VR/AR Development', progress: 45 },
                { label: 'Advanced AI Systems', progress: 75 },
              ].map((item, index) => (
                <div key={item.label} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-surface">{item.label}</span>
                    <span className="font-mono text-xs text-neutral/40">
                      Learning
                    </span>
                  </div>
                  <div className="h-1 bg-dark-300 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="h-full bg-vermilion/50"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
