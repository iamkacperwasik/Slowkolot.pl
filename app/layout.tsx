import 'globals.css';

import {Inter} from 'next/font/google';
import {Footer} from 'ui/components/Layout/Footer';
import {WordContext} from 'ui/components/Word/WordContext';
import {get_upvotes_count} from 'ui/utils/vote/get_upvotes_count';
import {get_random_word} from 'ui/utils/word/get_random_word';

const inter = Inter({subsets: ['latin']});

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const {word, word_definition, id: word_id} = await get_random_word();
  const upvotes = await get_upvotes_count(word_id);

  return (
    <WordContext
      context={{
        word,
        word_definition,
        word_id,
        upvotes,
      }}
    >
      <html lang='pl'>
        <body className={inter.className + ' bg-gray-950 text-gray-200'}>
          <div className='py-10 w-[800px] mx-auto text-2xl'>
            <main>{children}</main>

            <Footer />
          </div>
        </body>
      </html>
    </WordContext>
  );
}
