import {HomePageContext} from 'ui/components/Pages/HomePageContext';
import {Feedback} from 'ui/components/Word/Feedback';
import {Word} from 'ui/components/Word/Word';
import {WordDefinition} from 'ui/components/Word/WordDefinition';
import {get_upvotes_count} from 'ui/utils/vote/get_upvotes_count';
import {get_random_word} from 'ui/utils/word/get_random_word';

export default async function Home() {
  const {word, word_definition, id: word_id} = await get_random_word();
  const upvotes = await get_upvotes_count(word_id);

  return (
    <HomePageContext
      context={{
        word,
        word_definition,
        word_id,
        upvotes,
      }}
    >
      <Word />
      <WordDefinition />

      <Feedback />
    </HomePageContext>
  );
}
