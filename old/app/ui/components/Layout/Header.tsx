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
    <div className='mb-8 py-4 sm:w-max w-full'>
      <Link href='/'>
        <h1 className='text-[30px] md:text-[50px] font-bold tracking-wide mb-2'>Słówkolot.pl</h1>
      </Link>

      <p className='tracking-wide lg:text-[20px]'>Ciekawostki słownicze w Zasięgu Kliknięcia!</p>

      <div className='h-[20px] border-b border-gray-300 mb-4' />

      <div className='flex gap-4 lg:text-[20px]'>
        <p className='hover:underline cursor-pointer' onClick={navigate_to_new_word}>
          Inne słówko
        </p>

        <Link href='/about'>
          <p className='hover:underline'>O projekcie</p>
        </Link>
      </div>
    </div>
  );
};
