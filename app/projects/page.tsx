'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'game', label: 'Games' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'web', label: 'Web' },
  { id: 'tool', label: 'Tools' },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            label="Portfolio"
            title="Projects"
            description="A collection of my work spanning game development, AI/ML integration, and web technologies."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-vermilion text-white'
                    : 'bg-dark-300 text-neutral/60 hover:text-surface border border-white/5'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    image={project.image}
                    github={project.github}
                    demo={project.demo}
                    index={index}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral/40">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-dark-400">
        <div className="container-main">
          <SectionHeader
            label="Approach"
            title="My Development Process"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Research',
                description: 'Understanding the problem space, target audience, and technical requirements.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Creating prototypes, architecture diagrams, and defining the technical approach.',
              },
              {
                step: '03',
                title: 'Develop',
                description: 'Building with best practices, clean code, and iterative testing cycles.',
              },
              {
                step: '04',
                title: 'Deliver',
                description: 'Polishing, optimizing, and deploying with comprehensive documentation.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <span className="text-5xl font-bold text-dark-200">{item.step}</span>
                <h4 className="text-lg font-semibold text-surface mt-4 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral/50 leading-relaxed">
                  {item.description}
                </p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-12 h-px bg-gradient-to-r from-vermilion/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
