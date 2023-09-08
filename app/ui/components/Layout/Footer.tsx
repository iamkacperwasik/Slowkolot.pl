'use client';

import Link from 'next/link';
import {useState} from 'react';

export const Footer = () => {
  const [words_count] = useState(32);

  // TODO: `fetch words_count`

  return (
    <footer className='my-4 text-sm flex justify-between items-center'>
      <div className='flex gap-4 items-center'>
        <div>
          <span>&copy; 2023 </span>
          <Link href='https://kacper.wasik.me' target='_blank' className='hover:underline'>
            Kacper Wąsik
          </Link>
        </div>

        <div className='w-[2px] h-[15px] border-r border-gray-300' />

        <Link
          href='https://github.com/iamkacperwasik/Slowkolot.pl'
          target='_blank'
          className='hover:underline'
        >
          Source code
        </Link>
      </div>

      <Link href='/list' className='hover:underline'>
        <div>
          Liczba dostępnych słów: <span className='font-bold'>{words_count}</span>
        </div>
      </Link>
    </footer>
  );
};
