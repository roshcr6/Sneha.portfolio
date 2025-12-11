'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`section-header ${align === 'center' ? 'text-center' : ''}`}
    >
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="text-neutral/70 max-w-2xl mt-4 leading-relaxed">
          {description}
        </p>
      )}
      <div className={`section-divider ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}
