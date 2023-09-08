import Link from 'next/link';

export const Header = () => {
  return (
    <div className='mb-16 w-max'>
      <Link href='/'>
        <h1 className='text-[40px] font-bold tracking-wide mb-2'>Słówkolot.pl</h1>
      </Link>
      <p className='text-xl tracking-wide'>Ciekawostki słownicze w Zasięgu Kliknięcia!</p>

      <div className='w-full h-[20px] border-b border-gray-300 mb-4' />

      <div className='flex gap-4'>
        <Link href='/about'>
          <p className='text-sm hover:underline'>O projekcie</p>
        </Link>

        <Link href='/list'>
          <p className='text-sm hover:underline'>Lista słówek</p>
        </Link>
      </div>
    </div>
  );
};
