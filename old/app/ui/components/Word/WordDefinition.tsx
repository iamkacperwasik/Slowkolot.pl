'use client';

import {useAtomValue} from 'jotai';
import {word_definition_atom} from 'ui/atoms/word/word_definition';

export const WordDefinition = () => {
  const word_definition = useAtomValue(word_definition_atom);

  return <p className='my-4 font-mono text-[16px] md:text-[20px]'>{word_definition}</p>;
};
