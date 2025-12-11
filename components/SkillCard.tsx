'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level?: number;
  index: number;
}

export default function SkillCard({ icon: Icon, name, level, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative p-5 bg-dark-200 border border-white/5 hover:border-vermilion/30 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center bg-dark-300 border border-white/5 group-hover:border-vermilion/50 transition-colors">
          <Icon size={20} className="text-neutral/60 group-hover:text-vermilion transition-colors" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-surface truncate">{name}</h4>
          {level !== undefined && (
            <div className="mt-2 h-0.5 bg-dark-400 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
                className="h-full bg-vermilion"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
