'use client';

import {createStore} from 'jotai';
import type {FC, ReactNode} from 'react';
import {Provider as JotaiProvider} from 'jotai';
import {HomePageContext} from 'page';
import {word_atom} from 'ui/atoms/word/word';
import {word_definition_atom} from 'ui/atoms/word/word_definition';
import {upvotes_atom} from 'ui/atoms/vote/upvotes_atom';
import {word_id_atom} from 'ui/atoms/word/word_id';

type Props = {
  context: HomePageContext;
  children: ReactNode;
};

export const WordContext: FC<Props> = ({
  children,
  context: {word, word_definition, word_id, upvotes},
}) => {
  const word_store = createStore();

  word_store.set(word_atom, word);
  word_store.set(word_id_atom, word_id);
  word_store.set(word_definition_atom, word_definition);
  word_store.set(upvotes_atom, upvotes);

  return <JotaiProvider store={word_store}>{children}</JotaiProvider>;
};
