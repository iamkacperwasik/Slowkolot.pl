'use client';

import {createStore} from 'jotai';
import type {FC, ReactNode} from 'react';
import {Provider as JotaiProvider} from 'jotai';
import {Word, wordAtom, definitionAtom, likesAtom, dislikesAtom} from 'word/atoms/WordAtoms';

type Props = {
  word: Word;
  children: ReactNode;
};

export const WordContext: FC<Props> = ({children, word: {word, definition, dislikes, likes}}) => {
  const WordStore = createStore();

  WordStore.set(wordAtom, word);
  WordStore.set(definitionAtom, definition);

  WordStore.set(likesAtom, likes);
  WordStore.set(dislikesAtom, dislikes);

  return <JotaiProvider store={WordStore}>{children}</JotaiProvider>;
};