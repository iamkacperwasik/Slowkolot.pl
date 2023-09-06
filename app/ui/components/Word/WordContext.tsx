'use client';

import {createStore} from 'jotai';
import type {FC, ReactNode} from 'react';
import {Provider as JotaiProvider} from 'jotai';
import {word_atom} from 'ui/atoms/word/word';
import {word_definition_atom} from 'ui/atoms/word/word_definition';
import {word_id_atom} from 'ui/atoms/word/word_id';
import {upvotes_count_atom} from 'ui/atoms/vote/upvotes_count_atom';
import {MyVote, my_vote_atom} from 'ui/atoms/vote/my_vote_atom';
import {my_ip_atom} from 'ui/atoms/ip/my_ip';

type Props = {
  context: HomePageContext;
  children: ReactNode;
};

type HomePageContext = {
  word: string;
  word_id: number;
  word_definition: string;
  upvotes: number;
  my_vote: MyVote;
  ip: string;
};

export const WordContext: FC<Props> = ({
  children,
  context: {word, word_definition, word_id, upvotes, my_vote, ip},
}) => {
  const word_store = createStore();

  word_store.set(word_atom, word);
  word_store.set(word_id_atom, word_id);
  word_store.set(word_definition_atom, word_definition);
  word_store.set(upvotes_count_atom, upvotes);
  word_store.set(my_vote_atom, my_vote);
  word_store.set(my_ip_atom, ip);

  return <JotaiProvider store={word_store}>{children}</JotaiProvider>;
};
