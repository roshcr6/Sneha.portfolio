export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Freelance' | 'Contract';
  description: string;
  achievements?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  grade?: string;
  achievements?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Cyber Security Intern',
    company: 'Cisco',
    location: 'Remote',
    period: 'Jun 2025 - Aug 2025',
    type: 'Internship',
    description: 'Focused on vulnerability assessment and penetration testing for enterprise networks.',
    achievements: [
      'Assisted in comprehensive vulnerability assessment and penetration testing',
      'Configured firewalls and intrusion detection systems (IDS)',
      'Collaborated with security teams to remediate vulnerabilities',
      'Documented security protocols and best practices',
    ],
  },
  {
    id: 'exp-2',
    title: 'Cloud Security Intern',
    company: 'Microsoft',
    location: 'Remote',
    period: 'Jan 2025 - Mar 2025',
    type: 'Internship',
    description: 'Worked on Azure security tools and threat detection systems.',
    achievements: [
      'Analyzed security logs to detect and investigate potential threats',
      'Implemented Azure security tools and monitoring solutions',
      'Assisted in developing security policies for cloud infrastructure',
      'Participated in incident response exercises',
    ],
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'B.Tech in Computer Science Engineering (Cyber Security)',
    institution: 'Rajagiri School of Engineering and Technology',
    location: 'Eranakulam, Kerala',
    period: '2024 - 2028 (Expected)',
    grade: '8.5 GPA',
    achievements: [
      'Ethical Hacking Excellence Award',
      'Programming Excellence Recognition',
      'Consistent academic performer',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'Introduction to Cyber Security',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    link: 'https://cisco.com/networking-academy',
  },
  {
    id: 'cert-2',
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2025',
    link: 'https://microsoft.com/certifications',
  },
];
