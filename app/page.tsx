'use client';

import {useAtomValue, useSetAtom} from 'jotai';
import {useEffect} from 'react';
import {my_vote_atom} from 'ui/atoms/vote/my_vote_atom';
import {word_id_atom} from 'ui/atoms/word/word_id';
import {Feedback} from 'ui/components/Word/Feedback';
import {Word} from 'ui/components/Word/Word';
import {WordDefinition} from 'ui/components/Word/WordDefinition';
import {get_my_vote} from 'ui/utils/get_my_vote';

export default function Home() {
  const word_id = useAtomValue(word_id_atom);
  const set_my_vote = useSetAtom(my_vote_atom);

  useEffect(() => {
    get_my_vote(word_id).then((my_vote) => {
      set_my_vote(my_vote);
    });
  }, []);

  return (
    <>
      <Feedback />

      <Word />
      <WordDefinition />
    </>
  );
}
