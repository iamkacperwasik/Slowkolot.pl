import 'globals.css';

import {Inter} from 'next/font/google';
import Script from 'next/script';
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
        <div className='flex flex-col justify-between container mx-auto min-h-screen p-4'>
          <div>
            <Header />

            <main className='border px-4 pb-4 pt-2 w-full sm:w-[75%] lg:w-[50%]'>{children}</main>
          </div>

          <Footer words_count={words_count} />
        </div>

        <Script src='https://www.googletagmanager.com/gtag/js?id=G-XJ2H501N3E' />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XJ2H501N3E');
        `}
        </Script>
      </body>
    </html>
  );
}
