import 'globals.css';

import {Inter} from 'next/font/google';
import {WordContext} from 'ui/components/Word/WordContext';

const inter = Inter({subsets: ['latin']});

export default async function RootLayout({children}: {children: React.ReactNode}) {
  // const radomWord = await getRandomWord();

  return (
    <WordContext
      context={{
        word: 'Word',
        word_definition: 'lorem ipsum',
        up_votes: 1,
        down_votes: 0,
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
