import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Local Logic Studio',
  description: 'Local Logic Studio Homepage Clone',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
