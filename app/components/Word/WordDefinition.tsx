import {FC, ReactNode} from 'react';

export const WordDefinition: FC<{children: ReactNode}> = ({children}) => {
  return <p className='mt-2 mb-8 p-4 bg-gray-900 font-mono'>{children}</p>;
};
