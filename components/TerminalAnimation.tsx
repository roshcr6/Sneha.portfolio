'use client';

import { TypeAnimation } from 'react-type-animation';

export default function TerminalAnimation() {
  return (
    <div className="glass-card border border-vermilion/20 p-6 rounded-lg font-mono text-sm max-w-2xl mx-auto mb-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-neutral/40 text-xs ml-2">sneha@security:~</span>
      </div>
      
      <div className="space-y-2 text-neutral/80">
        <div className="flex items-start gap-2">
          <span className="text-vermilion">$</span>
          <div className="flex-1">
            <TypeAnimation
              sequence={[
                'whoami',
                1000,
                'whoami\n>> Cyber Security Specialist',
                2000,
                'whoami\n>> Cyber Security Specialist\n\n$ cat specialties.txt',
                1000,
                'whoami\n>> Cyber Security Specialist\n\n$ cat specialties.txt\n>> Ethical Hacking\n>> Network Security\n>> Cloud Security\n>> Penetration Testing',
                2000,
                'whoami\n>> Cyber Security Specialist\n\n$ cat specialties.txt\n>> Ethical Hacking\n>> Network Security\n>> Cloud Security\n>> Penetration Testing\n\n$ status',
                1000,
                'whoami\n>> Cyber Security Specialist\n\n$ cat specialties.txt\n>> Ethical Hacking\n>> Network Security\n>> Cloud Security\n>> Penetration Testing\n\n$ status\n>> Ready to secure your digital landscape ✓',
                3000,
              ]}
              speed={50}
              repeat={Infinity}
              className="whitespace-pre-wrap"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
