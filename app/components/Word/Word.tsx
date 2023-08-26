import {FC, ReactNode} from 'react';

export const Word: FC<{children: ReactNode}> = ({children}) => {
  return <h1 className='text-5xl mb-4 font-semibold font-serif w-max'>{children}</h1>;
};
