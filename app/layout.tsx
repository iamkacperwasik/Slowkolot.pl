import 'globals.css';

import {Inter} from 'next/font/google';
import {Footer} from 'ui/components/Layout/Footer';

const inter = Inter({subsets: ['latin']});

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='pl'>
      <body className={inter.className + ' bg-gray-950 text-gray-200'}>
        <div className='py-10 w-[800px] mx-auto text-2xl'>
          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
