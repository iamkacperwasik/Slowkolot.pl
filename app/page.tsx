import {Feedback} from 'ui/components/Word/Feedback';
import {Word} from 'ui/components/Word/Word';
import {WordDefinition} from 'ui/components/Word/WordDefinition';

export type HomePageContext = {
  word: string;
  word_id: number;
  word_definition: string;
  upvotes: number;
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
