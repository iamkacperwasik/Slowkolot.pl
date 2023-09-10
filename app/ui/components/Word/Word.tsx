'use client';

import {useAtomValue} from 'jotai';
import {word_atom} from 'ui/atoms/word/word';

export const Word = () => {
  const word = useAtomValue(word_atom);

  return (
    <h1 className='text-[30px] md:text-[40px] font-semibold font-serif leading-none my-4'>
      {word}
    </h1>
  );
};
