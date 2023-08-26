'use client';

import {FC, ReactNode} from 'react';
import {Word, useWordStore} from 'stores/WordStore';

type Props = {word: Word; children: ReactNode};

export const WordContext: FC<Props> = ({children, word}) => {
  useWordStore.setState(word);

  return children;
};
