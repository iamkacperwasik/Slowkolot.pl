'use client';

import {NextUIProvider} from '@nextui-org/react';
import {Provider as StateProvider} from 'jotai';
import {FC} from 'react';

type Props = {children: React.ReactNode};

export const Providers: FC<Props> = ({children}) => (
  <NextUIProvider>
    <StateProvider>{children}</StateProvider>
  </NextUIProvider>
);
