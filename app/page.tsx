import {Feedback} from 'components/Word/Feedback';
import {Word} from 'components/Word/Word';
import {WordDefinition} from 'components/Word/WordDefinition';

export default function Home() {
  return (
    <main className='text-2xl py-10 w-[800px] mx-auto'>
      <Feedback />

      <Word>Obfuskacja</Word>
      <WordDefinition>
        To słowo oznacza celowe utrudnianie zrozumienia lub utrzymania przejrzystości w celu ukrycia
        prawdziwych intencji lub informacji.
      </WordDefinition>
    </main>
  );
}
