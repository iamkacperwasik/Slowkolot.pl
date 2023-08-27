'use client';

import type {FC, ReactNode} from 'react';
import {Word, useWordStore} from 'stores/WordStore';

type Props = {
  value: Word;
  children: ReactNode;
};

export const WordContext: FC<Props> = ({children, value}) => {
  useWordStore.setState(value);

  return children;
};
