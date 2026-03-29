import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Product Store - Discover Quality Products',
  description: 'Explore our premium collection of high-quality products.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // force next js recompilation to recover deleted chunks

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
