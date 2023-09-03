import {Feedback} from 'ui/components/Word/Feedback';
import {Word} from 'ui/components/Word/Word';
import {WordDefinition} from 'ui/components/Word/WordDefinition';

export type HomePageContext = {
  word: string;
  word_definition: string;
  up_votes: number;
  down_votes: number;
};

export default function Home() {
  return (
    <>
      <Feedback />

      <Word />
      <WordDefinition />
    </>
  );
}
