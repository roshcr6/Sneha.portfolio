'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/snehaaravind', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sneha-aravind-8b7b2832a', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:u2403248@rajagiri.edu.in', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/5 bg-dark-500">
      <div className="container-main">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="inline-block mb-4"
            >
              <span className="text-2xl font-bold text-surface tracking-wider">
                SNEHA
              </span>
            </a>
            <p className="text-sm text-neutral/60 max-w-xs leading-relaxed">
              Cyber Security Specialist securing digital landscapes through 
              ethical hacking, network security, and cloud solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-surface tracking-wider uppercase mb-6">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm text-neutral/60 hover:text-vermilion transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-surface tracking-wider uppercase mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-neutral/60 hover:border-vermilion hover:text-vermilion transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral/40 font-mono">
            © {new Date().getFullYear()} Sneha Aravind. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-xs text-neutral/40 hover:text-vermilion transition-colors group"
          >
            <span className="font-mono">Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
