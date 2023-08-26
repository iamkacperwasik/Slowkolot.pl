import {Feedback} from 'components/Word/Feedback';
import {Word} from 'components/Word/Word';
import {WordContext} from 'components/Word/WordContext';
import {WordDefinition} from 'components/Word/WordDefinition';
import {getRandomWord} from 'utils/getRandomWord';

export default async function Home() {
  const word = await getRandomWord();

  return (
    <WordContext word={word}>
      <Feedback />

      <Word />
      <WordDefinition />
    </WordContext>
  );
}
