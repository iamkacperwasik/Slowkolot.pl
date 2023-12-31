import Link from 'next/link';
import {FC} from 'react';

type Props = {
  words_count: number;
};

export const Footer: FC<Props> = ({words_count}) => {
  return (
    <footer className='mt-8'>
      <div className='flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-gray-300'>
        <p className='sm:order-2'>
          Liczba dostępnych słów: <span className='font-bold'>{words_count}</span>
        </p>

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
      </div>
    </footer>
  );
};
