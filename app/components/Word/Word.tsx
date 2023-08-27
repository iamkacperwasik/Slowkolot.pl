'use client';

import {wordAtom} from 'atoms/WordAtoms';
import {useAtomValue} from 'jotai';

export const Word = () => {
  const word = useAtomValue(wordAtom);

  return <h1 className='text-5xl mb-4 font-semibold font-serif w-max'>{word}</h1>;
};
