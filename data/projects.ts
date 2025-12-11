export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
  category: 'security' | 'cloud' | 'web' | 'tool';
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Network Intrusion Detection System',
    description: 'AI-powered system for real-time network traffic analysis and threat detection using machine learning algorithms to identify malicious patterns and alert administrators.',
    tech: ['Python', 'Wireshark', 'Machine Learning', 'Network Security'],
    github: 'https://github.com/snehaaravind/network-ids',
    featured: true,
    category: 'security',
  },
  {
    id: 'project-2',
    title: 'Automated Vulnerability Scanner',
    description: 'Custom-built tool for automated security assessment that performs comprehensive scans on web applications and network infrastructure to identify vulnerabilities.',
    tech: ['Python', 'Kali Linux', 'Ethical Hacking', 'MySQL'],
    github: 'https://github.com/snehaaravind/vuln-scanner',
    featured: true,
    category: 'tool',
  },
  {
    id: 'project-3',
    title: 'Secure End-to-End Chat Application',
    description: 'Encrypted messaging platform implementing modern cryptographic standards with secure key exchange, message integrity verification, and secure file sharing.',
    tech: ['Java', 'Cryptography', 'Django', 'JavaScript'],
    github: 'https://github.com/snehaaravind/secure-chat',
    featured: true,
    category: 'security',
  },
  {
    id: 'project-4',
    title: 'Firewall Rule Manager',
    description: 'Web-based dashboard that simplifies firewall configuration and monitoring with visual rule editing, real-time traffic monitoring, and automated rule optimization.',
    tech: ['Python', 'Django', 'Network Security', 'JavaScript'],
    github: 'https://github.com/snehaaravind/firewall-manager',
    featured: false,
    category: 'tool',
  },
  {
    id: 'project-5',
    title: 'Password Security Analyzer',
    description: 'Comprehensive password analysis tool that evaluates strength, detects common patterns, and integrates with breach databases to check for compromised credentials.',
    tech: ['Python', 'C++', 'Security Analysis', 'MySQL'],
    github: 'https://github.com/snehaaravind/password-analyzer',
    featured: false,
    category: 'tool',
  },
  {
    id: 'project-6',
    title: 'Azure Security Dashboard',
    description: 'Centralized monitoring dashboard for Azure cloud security metrics with real-time threat detection, compliance monitoring, and automated alerting.',
    tech: ['Azure', 'Python', 'Cloud Security', 'JavaScript'],
    github: 'https://github.com/snehaaravind/azure-security-dashboard',
    featured: true,
    category: 'cloud',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
