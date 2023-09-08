'use client';

import {useAtomValue, useSetAtom} from 'jotai';
import {useEffect} from 'react';
import {my_ip_atom} from 'ui/atoms/ip/my_ip';
import {my_vote_atom} from 'ui/atoms/vote/my_vote_atom';
import {word_id_atom} from 'ui/atoms/word/word_id';
import {Feedback} from 'ui/components/Word/Feedback';
import {Word} from 'ui/components/Word/Word';
import {WordDefinition} from 'ui/components/Word/WordDefinition';
import {fetch_data} from 'ui/utils/fetch_data';

export default function Home() {
  const word_id = useAtomValue(word_id_atom);

  const set_my_vote = useSetAtom(my_vote_atom);
  const set_my_ip = useSetAtom(my_ip_atom);

  useEffect(() => {
    fetch_data(word_id).then(({ip, vote}) => {
      console.log({ip, vote});
      set_my_vote(vote);
      set_my_ip(ip);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Feedback />

      <Word />
      <WordDefinition />
    </>
  );
}
