'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sneha@example.com',
    href: 'mailto:sneha@example.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, India',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/snehaaravind',
    handle: '@snehaaravind',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/snehaaravind',
    handle: '/in/snehaaravind',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/snehaaravind',
    handle: '@snehaaravind',
  },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            label="Contact"
            title="Get In Touch"
            description="Have a project in mind or want to collaborate? I'd love to hear from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-surface mb-6">
                Send a Message
              </h3>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-surface mb-6">
                Contact Information
              </h3>
              
              {/* Info Cards */}
              <div className="space-y-4 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-4 p-5 bg-dark-200 border border-white/5 hover:border-vermilion/30 transition-all"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-dark-300 border border-white/5 group-hover:border-vermilion/50 transition-colors">
                      <info.icon size={20} className="text-vermilion" />
                    </div>
                    <div>
                      <span className="block text-xs text-neutral/40 font-mono uppercase tracking-wider">
                        {info.label}
                      </span>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-surface hover:text-vermilion transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-surface">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <h4 className="text-sm font-semibold text-surface mb-4 uppercase tracking-wider">
                Social Profiles
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="group flex items-center justify-between p-4 bg-dark-200 border border-white/5 hover:border-vermilion/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <social.icon size={18} className="text-neutral/40 group-hover:text-vermilion transition-colors" />
                      <div>
                        <span className="block text-sm font-medium text-surface">
                          {social.label}
                        </span>
                        <span className="text-xs text-neutral/40 font-mono">
                          {social.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-neutral/20 group-hover:text-vermilion transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-6 border border-vermilion/30 bg-vermilion/5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-surface">
                    Available for Work
                  </span>
                </div>
                <p className="text-sm text-neutral/60 leading-relaxed">
                  Currently open to freelance projects, full-time opportunities, 
                  and exciting collaborations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-400">
        <div className="container-main">
          <SectionHeader
            label="FAQ"
            title="Common Questions"
            align="center"
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on complexity. Small projects typically take 2-4 weeks, while larger games or applications may take 2-6 months. I provide detailed estimates during initial consultations.',
              },
              {
                question: 'Do you work with international clients?',
                answer: 'Absolutely! I work with clients worldwide and am comfortable with different time zones. Communication is typically handled through email, video calls, and project management tools.',
              },
              {
                question: 'What game engines do you specialize in?',
                answer: 'I primarily work with Unity and Unreal Engine 5, with extensive experience in C# and C++. I also have experience with Godot for smaller projects.',
              },
              {
                question: 'Do you offer ongoing support after project completion?',
                answer: 'Yes, I provide post-launch support and maintenance packages. This includes bug fixes, performance optimization, and feature additions as needed.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-dark-300 border border-white/5"
              >
                <h4 className="text-lg font-medium text-surface mb-3">
                  {faq.question}
                </h4>
                <p className="text-sm text-neutral/60 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
