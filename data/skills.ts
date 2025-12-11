import {
  Code2,
  Shield,
  Database,
  Terminal,
  Cloud,
  Lock,
  Network,
  Search,
  Server,
  FileCode,
  Cpu,
  Users,
  Brain,
  Target,
  Workflow,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Java', level: 90, icon: Code2 },
      { name: 'Python', level: 88, icon: Code2 },
      { name: 'C', level: 85, icon: Code2 },
      { name: 'C++', level: 85, icon: Code2 },
      { name: 'JavaScript', level: 80, icon: FileCode },
    ],
  },
  {
    id: 'security',
    title: 'Cyber Security',
    icon: Shield,
    skills: [
      { name: 'Ethical Hacking', level: 92, icon: Lock },
      { name: 'Network Security', level: 90, icon: Network },
      { name: 'Penetration Testing', level: 88, icon: Target },
      { name: 'Vulnerability Assessment', level: 85, icon: Search },
      { name: 'Intrusion Detection', level: 82, icon: Shield },
    ],
  },
  {
    id: 'tools',
    title: 'Security Tools',
    icon: Terminal,
    skills: [
      { name: 'Kali Linux', level: 90, icon: Terminal },
      { name: 'Wireshark', level: 88, icon: Search },
      { name: 'Packet Tracer', level: 85, icon: Network },
      { name: 'Azure Security', level: 82, icon: Cloud },
      { name: 'MySQL', level: 80, icon: Database },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Cloud',
    icon: Cloud,
    skills: [
      { name: 'Django', level: 78, icon: Server },
      { name: 'Azure Cloud', level: 85, icon: Cloud },
      { name: 'Firewall Config', level: 82, icon: Shield },
      { name: 'IDS/IPS Systems', level: 80, icon: Cpu },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Problem Solving', level: 95, icon: Brain },
      { name: 'Attention to Detail', level: 92, icon: Target },
      { name: 'Teamwork', level: 90, icon: Users },
      { name: 'Adaptability', level: 88, icon: Workflow },
    ],
  },
];

export const allSkills = skillCategories.flatMap((cat) => cat.skills);
