import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import CustomCursor from '@/components/CustomCursor';
import ParticleBackground from '@/components/ParticleBackground';
import MatrixRain from '@/components/MatrixRain';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: 'Sneha Aravind | Cyber Security Specialist',
  description: 'Portfolio of Sneha Aravind - Cyber Security Specialist specializing in Ethical Hacking, Network Security, and Cloud Security.',
  keywords: ['Cyber Security', 'Ethical Hacking', 'Network Security', 'Cloud Security', 'Penetration Testing', 'Portfolio'],
  authors: [{ name: 'Sneha Aravind' }],
  openGraph: {
    title: 'Sneha Aravind | Cyber Security Specialist',
    description: 'Portfolio of Sneha Aravind - Cyber Security Specialist',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-charcoal text-neutral antialiased">
        <ThemeProvider>
          <CustomCursor />
          <ParticleBackground />
          <MatrixRain />
          <Navbar />
          <ThemeToggle />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
