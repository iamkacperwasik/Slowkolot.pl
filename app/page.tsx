import {Feedback} from 'ui/components/Word/Feedback';
import {Word} from 'ui/components/Word/Word';
import {WordContext} from 'ui/components/Word/WordContext';
import {WordDefinition} from 'ui/components/Word/WordDefinition';
import {get_my_ip} from 'ui/utils/ip/get_my_ip';
import {get_my_vote} from 'ui/utils/vote/get_my_vote';
import {get_upvotes_count} from 'ui/utils/vote/get_upvotes_count';
import {get_random_word} from 'ui/utils/word/get_random_word';

export default async function Home() {
  const ip = await get_my_ip();
  const {word, word_definition, id: word_id} = await get_random_word();

  const [upvotes, my_vote] = await Promise.all([
    get_upvotes_count(word_id),
    get_my_vote(word_id, ip),
  ]);

  return (
    <WordContext
      context={{
        word,
        word_definition,
        word_id,
        upvotes,
        my_vote,
        ip,
      }}
    >
      <Feedback />

      <Word />
      <WordDefinition />
    </WordContext>
  );
}
