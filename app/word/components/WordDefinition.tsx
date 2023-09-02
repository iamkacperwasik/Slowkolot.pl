'use client';

import {useAtomValue} from 'jotai';
import {definitionAtom} from 'word/atoms/WordAtoms';

export const WordDefinition = () => {
  const definition = useAtomValue(definitionAtom);

  return <p className='mt-2 mb-8 p-4 bg-gray-900 font-mono'>{definition}</p>;
};
