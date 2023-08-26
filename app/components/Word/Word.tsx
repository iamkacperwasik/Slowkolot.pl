'use client';

import {useWordStore} from 'stores/WordStore';

export const Word = () => {
  const word = useWordStore(({word}) => word);

  return <h1 className='text-5xl mb-4 font-semibold font-serif w-max'>{word}</h1>;
};
