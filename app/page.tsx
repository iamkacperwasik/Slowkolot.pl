import {Feedback} from 'components/Word/Feedback';
import {Word} from 'components/Word/Word';
import {WordDefinition} from 'components/Word/WordDefinition';
import {getRandomWord} from 'utils/getRandomWord';

export default async function Home() {
  const {word, definition} = await getRandomWord();

  return (
    <>
      <Feedback />

      <Word>{word}</Word>
      <WordDefinition>{definition}</WordDefinition>
    </>
  );
}
