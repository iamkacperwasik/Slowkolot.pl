'use client';

import {useWordStore} from 'stores/WordStore';

export const WordDefinition = () => {
  const definition = useWordStore(({definition}) => definition);

  return <p className='mt-2 mb-8 p-4 bg-gray-900 font-mono'>{definition}</p>;
};
