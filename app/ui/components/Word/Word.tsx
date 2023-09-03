'use client';

import {useAtomValue} from 'jotai';
import {word_atom} from 'ui/atoms/word/word';

export const Word = () => {
  const word = useAtomValue(word_atom);

  return <h1 className='text-5xl mb-4 font-semibold font-serif w-max'>{word}</h1>;
};
