import type { Metadata } from 'next';
import './globals.css';
import { gambetta, switzer } from '@/fonts/fonts';

export const metadata: Metadata = {
  title: 'Eric Dai',
  description:
    'I create tools for thought - interfaces that amplify human understanding and creative expression. I am a candidate for MSE in Computer Science at the University of Pennsylvania. I help others design and build UI under my studio Ren. Previously, I prototyped software at Konrad Group, and devised strategy at Adobe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gambetta.variable} ${switzer.variable} antialiased`}>{children}</body>
    </html>
  );
}
