import { Trophy, Award, Medal, Star, Shield, Code, Cloud, Target } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'academic' | 'certification' | 'professional' | 'competition';
  icon: LucideIcon;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Ethical Hacking Excellence Award',
    description: 'Recognized for outstanding performance in ethical hacking and penetration testing coursework at Rajagiri School of Engineering.',
    date: '2025',
    category: 'academic',
    icon: Shield,
  },
  {
    id: 'ach-2',
    title: 'Programming Excellence Recognition',
    description: 'Awarded for exceptional programming skills and innovative problem-solving approaches in computer science curriculum.',
    date: '2025',
    category: 'academic',
    icon: Code,
  },
  {
    id: 'ach-3',
    title: 'Introduction to Cyber Security - Cisco',
    description: 'Successfully completed comprehensive cyber security fundamentals certification program from Cisco Networking Academy.',
    date: '2025',
    category: 'certification',
    icon: Trophy,
  },
  {
    id: 'ach-4',
    title: 'Microsoft Azure Fundamentals',
    description: 'Certified in Azure cloud fundamentals with focus on security, compliance, and cloud computing principles.',
    date: '2025',
    category: 'certification',
    icon: Cloud,
  },
  {
    id: 'ach-5',
    title: 'Cisco Security Internship',
    description: 'Selected for competitive cyber security internship program focusing on enterprise security and vulnerability assessment.',
    date: '2025',
    category: 'professional',
    icon: Award,
  },
  {
    id: 'ach-6',
    title: 'Microsoft Cloud Security Internship',
    description: 'Completed cloud security internship working on Azure security tools, threat detection, and incident response.',
    date: '2025',
    category: 'professional',
    icon: Star,
  },
  {
    id: 'ach-7',
    title: 'Hackathon Enthusiast',
    description: 'Active participant in multiple hackathons, developing innovative security solutions and collaborative projects.',
    date: '2024-2025',
    category: 'competition',
    icon: Target,
  },
  {
    id: 'ach-8',
    title: 'Academic Excellence - 8.5 GPA',
    description: 'Maintained exceptional academic performance with 8.5 GPA in B.Tech Computer Science Engineering (Cyber Security).',
    date: '2024-2025',
    category: 'academic',
    icon: Medal,
  },
];

export const achievementsByCategory = {
  academic: achievements.filter((a) => a.category === 'academic'),
  certification: achievements.filter((a) => a.category === 'certification'),
  professional: achievements.filter((a) => a.category === 'professional'),
  competition: achievements.filter((a) => a.category === 'competition'),
};
