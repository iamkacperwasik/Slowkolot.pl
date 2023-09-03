'use client';

import {useAtomValue} from 'jotai';
import {word_definition_atom} from 'ui/atoms/word/word_definition';

export const WordDefinition = () => {
  const word_definition = useAtomValue(word_definition_atom);

  return <p className='mt-2 mb-8 p-4 bg-gray-900 font-mono'>{word_definition}</p>;
};
