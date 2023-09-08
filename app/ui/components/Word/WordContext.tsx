'use client';

import {createStore, useAtom, useAtomValue} from 'jotai';
import {useEffect, type FC, type ReactNode} from 'react';
import {Provider as JotaiProvider} from 'jotai';
import {word_atom} from 'ui/atoms/word/word';
import {word_definition_atom} from 'ui/atoms/word/word_definition';
import {word_id_atom} from 'ui/atoms/word/word_id';
import {upvotes_count_atom} from 'ui/atoms/vote/upvotes_count_atom';
import {my_vote_atom} from 'ui/atoms/vote/my_vote_atom';
import {my_ip_atom} from 'ui/atoms/ip/my_ip';
import {fetch_data} from 'ui/utils/fetch_data';

type Props = {
  context: HomePageContext;
  children: ReactNode;
};

type HomePageContext = {
  word: string;
  word_id: number;
  word_definition: string;
  upvotes: number;
};

export const WordContext: FC<Props> = ({
  children,
  context: {word, word_definition, word_id, upvotes},
}) => {
  const [my_vote, set_my_vote] = useAtom(my_vote_atom);
  const [my_ip, set_my_ip] = useAtom(my_ip_atom);

  useEffect(() => {
    fetch_data(word_id).then(({ip, vote}) => {
      console.log({ip, vote});
      set_my_vote(vote);
      set_my_ip(ip);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const word_store = createStore();

  word_store.set(word_atom, word);
  word_store.set(word_id_atom, word_id);
  word_store.set(word_definition_atom, word_definition);
  word_store.set(upvotes_count_atom, upvotes);
  word_store.set(my_vote_atom, my_vote);
  word_store.set(my_ip_atom, my_ip);

  return <JotaiProvider store={word_store}>{children}</JotaiProvider>;
};
