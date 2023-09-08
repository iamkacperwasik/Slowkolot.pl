'use client';

import Link from 'next/link';
import {useRouter} from 'next/navigation';

export const Header = () => {
  const {push, refresh} = useRouter();

  const navigate_to_new_word = () => {
    push('/');
    refresh();
  };

  return (
    <div className='mb-16 w-max'>
      <Link href='/'>
        <h1 className='text-[40px] font-bold tracking-wide mb-2'>Słówkolot.pl</h1>
      </Link>
      <p className='text-xl tracking-wide'>Ciekawostki słownicze w Zasięgu Kliknięcia!</p>

      <div className='w-full h-[20px] border-b border-gray-300 mb-4' />

      <div className='flex gap-4'>
        <p className='text-sm hover:underline cursor-pointer' onClick={navigate_to_new_word}>
          Inne słówko
        </p>

        <Link href='/about'>
          <p className='text-sm hover:underline'>O projekcie</p>
        </Link>
      </div>
    </div>
  );
};
