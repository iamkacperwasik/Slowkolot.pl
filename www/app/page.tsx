import {Feedback} from 'components/Word/Feedback';
import {Word} from 'components/Word/Word';
import {WordDefinition} from 'components/Word/WordDefinition';

export default async function Home() {
  return (
    <>
      <Feedback />

      <Word />
      <WordDefinition />
    </>
  );
}
