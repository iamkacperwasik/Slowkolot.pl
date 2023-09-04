import 'globals.css';

import {Inter} from 'next/font/google';
import {WordContext} from 'ui/components/Word/WordContext';
import {get_random_word} from 'utils/get_random_word';

const inter = Inter({subsets: ['latin']});

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const {word, word_definition, id: word_id} = await get_random_word();

  return (
    <WordContext
      context={{
        word,
        word_definition,
        word_id,
        up_votes: 0,
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
