import './globals.css';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='pl'>
      <body className={inter.className + ' bg-gray-950 text-gray-200'}>{children}</body>
    </html>
  );
}