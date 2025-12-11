import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sneha Aravind | Game Developer',
  description: 'Portfolio of Sneha Aravind - Game Developer specializing in Unity, Unreal Engine, and AI/ML integration.',
  keywords: ['Game Developer', 'Unity', 'Unreal Engine', 'AI', 'Machine Learning', 'Portfolio'],
  authors: [{ name: 'Sneha Aravind' }],
  openGraph: {
    title: 'Sneha Aravind | Game Developer',
    description: 'Portfolio of Sneha Aravind - Game Developer',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
