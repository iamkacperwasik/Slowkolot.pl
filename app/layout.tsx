import 'globals.css';

import {Inter} from 'next/font/google';
import {WordContext} from 'word/components/WordContext';
import {getRandomWord} from 'word/utils/getRandomWord';

const inter = Inter({subsets: ['latin']});

export default async function RootLayout({children}: {children: React.ReactNode}) {
  // const radomWord = await getRandomWord();

  return (
    <WordContext
      word={{
        word: 'Word',
        definition: 'lorem ipsum',
        dislikes: 0,
        likes: 1,
      }}
    >
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
