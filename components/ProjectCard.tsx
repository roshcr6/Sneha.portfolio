'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { MouseEvent } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  demo,
  index,
}: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative glass-card glass-card-hover overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-dark-300">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border border-white/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-white/20">{title.charAt(0)}</span>
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Project Number */}
        <div className="absolute top-4 right-4 font-mono text-xs text-white/30">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div className="p-6" style={{ transform: 'translateZ(50px)' }}>
        <h3 className="text-xl font-semibold text-surface mb-3 group-hover:text-vermilion transition-colors gradient-text">
          {title}
        </h3>
        
        <p className="text-sm text-neutral/60 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <span
              key={item}
              className="px-2 py-1 text-xs font-mono text-neutral/50 glass-card border border-white/5 hover:border-vermilion/30 transition-all"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral/60 hover:text-surface transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral/60 hover:text-vermilion transition-colors"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Hover Arrow */}
      <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-vermilion">
        <ArrowUpRight size={18} className="text-vermilion" />
      </div>
    </motion.article>
  );
}
