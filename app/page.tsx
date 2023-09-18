import {HomePageContext} from 'ui/components/Pages/HomePageContext';
import {Feedback} from 'ui/components/Word/Feedback';
import {Word} from 'ui/components/Word/Word';
import {WordDefinition} from 'ui/components/Word/WordDefinition';

export default async function Home() {
  // const {word, word_definition, id: word_id} = await get_random_word();
  // const upvotes = await get_upvotes_count(word_id);

  return (
    <HomePageContext
      context={{
        word: 'Lorem, ipsum dolor.',
        word_definition:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quos hic quo exercitationem, at porro ratione autem natus ipsa excepturi.',
        word_id: 1,
        upvotes: 212,
      }}
    >
      <Word />
      <WordDefinition />

      <Feedback />
    </HomePageContext>
  );
}
