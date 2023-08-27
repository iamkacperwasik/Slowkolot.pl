import 'globals.css';

import {WordContext} from 'components/Word/WordContext';
import {Inter} from 'next/font/google';
import {getRandomWord} from 'utils/getRandomWord';

const inter = Inter({subsets: ['latin']});

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const radomWord = await getRandomWord();

  return (
    <WordContext word={radomWord}>
      <html lang='pl'>
        <body className={inter.className + ' bg-gray-950 text-gray-200'}>
          <div className='py-10 w-[800px] mx-auto text-2xl'>
            <main>{children}</main>

            {/* TODO: rewrite footer */}
            <footer>footer</footer>
          </div>
        </body>
      </html>
    </WordContext>
  );
}
