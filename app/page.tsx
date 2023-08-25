import {ReactNode} from 'react';
import {AiOutlineLike as LikeIcon, AiOutlineDislike as DislikeIcon} from 'react-icons/ai';

const LikeCounter = () => {
  return <p>21,200</p>;
};

const LikeButton = () => {
  return (
    <button className='cursor-pointer'>
      <LikeIcon />
    </button>
  );
};

const DislikeButton = () => {
  return (
    <button className='cursor-pointer'>
      <DislikeIcon />
    </button>
  );
};

const Feedback = () => {
  return (
    <section className='flex gap-4 items-center mb-4 text-xl'>
      <div className='flex items-center gap-2'>
        <LikeButton />
        <LikeCounter />
      </div>

      <DislikeButton />
    </section>
  );
};

const Word = ({children}: {children: ReactNode}) => {
  return <h1 className='text-5xl mb-4 font-semibold font-serif w-max'>{children}</h1>;
};

const WordDefinition = ({children}: {children: ReactNode}) => {
  return <p className='mt-2 mb-8 p-4 bg-gray-900 font-mono'>{children}</p>;
};

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
