import 'globals.css';

import {Inter} from 'next/font/google';
import {WordContext} from 'ui/components/Word/WordContext';
import {get_my_vote} from 'ui/utils/get_my_vote';
import {get_random_word} from 'ui/utils/get_random_word';
import {get_upvotes_count} from 'ui/utils/get_upvotes_count';

const inter = Inter({subsets: ['latin']});

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const {word, word_definition, id: word_id} = await get_random_word();

  const upvotes = await get_upvotes_count(word_id);
  const my_vote = await get_my_vote(word_id);

  return (
    <WordContext
      context={{
        word,
        word_definition,
        word_id,
        upvotes,
        my_vote,
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
