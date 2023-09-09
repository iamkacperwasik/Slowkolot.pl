import 'globals.css';

import {Inter} from 'next/font/google';
import {Footer} from 'ui/components/Layout/Footer';
import {Header} from 'ui/components/Layout/Header';
import {get_words_count} from 'ui/utils/word/get_words_count';

const inter = Inter({subsets: ['latin']});

export {metadata} from 'metadata';

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const words_count = await get_words_count();

  return (
    <html lang='pl'>
      <body className={inter.className + ' bg-gray-950 text-gray-200'}>
        <div className='py-10 w-[800px] mx-auto text-2xl'>
          <Header />

          <main>{children}</main>

          <Footer words_count={words_count} />
        </div>
      </body>
    </html>
  );
}
