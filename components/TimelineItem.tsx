'use client';

import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  achievements?: string[];
  index: number;
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  subtitle,
  period,
  description,
  achievements,
  index,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[3px] top-3 bottom-0 w-px bg-gradient-to-b from-vermilion/50 to-transparent" />
      )}
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1.5 w-2 h-2 bg-vermilion" />
      
      {/* Content */}
      <div className="group">
        <span className="inline-block font-mono text-xs text-vermilion mb-2">
          {period}
        </span>
        
        <h4 className="text-lg font-semibold text-surface mb-1 group-hover:text-vermilion transition-colors">
          {title}
        </h4>
        
        <p className="text-sm text-neutral/60 mb-3">{subtitle}</p>
        
        {description && (
          <p className="text-sm text-neutral/50 leading-relaxed mb-3">
            {description}
          </p>
        )}
        
        {achievements && achievements.length > 0 && (
          <ul className="space-y-1.5">
            {achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-neutral/50"
              >
                <span className="text-vermilion mt-1">—</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
