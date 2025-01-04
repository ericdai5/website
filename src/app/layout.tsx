import type { Metadata } from 'next';
import './globals.css';
import { gambetta, switzer } from '@/fonts/fonts';
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: 'Eric Dai',
  description:
    'I create interface tools that amplify human understanding and creative expression. I am a candidate for MSE in Computer Science at Penn. I help others design and build UI under my studio Ren. Previously, I prototyped software at Konrad Group, and devised strategy at Adobe.',
  // openGraph: {
  //   title: 'Eric Dai',
  //   description:
  //     'I create tools for thought - interfaces that amplify human understanding and creative expression. I am a candidate for MSE in Computer Science at Penn. I help others design and build UI under my studio Ren. Previously, I prototyped software at Konrad Group, and devised strategy at Adobe.',
  //   images: [
  //     {
  //       url: '/opengraph-image.png',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Eric Dai - Portfolio',
  //     },
  //   ],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Eric Dai',
  //   description:
  //     'I create tools for thought - interfaces that amplify human understanding and creative expression. I am a candidate for MSE in Computer Science at Penn. I help others design and build UI under my studio Ren. Previously, I prototyped software at Konrad Group, and devised strategy at Adobe.',
  //   images: ['/twitter-image.png'],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gambetta.variable} ${GeistSans.variable} ${switzer.variable} antialiased`}
    >
      <body>{children}</body>
      <meta property="og:image" content="/opengraph-image.png" />
      <meta property="twitter:image" content="/twitter-image.png" />
    </html>
  );
}
