import {Feedback} from 'word/components/Feedback';
import {Word} from 'word/components/Word';
import {WordDefinition} from 'word/components/WordDefinition';

export default function Home() {
  return (
    <>
      <Feedback />

      <Word />
      <WordDefinition />
    </>
  );
}
