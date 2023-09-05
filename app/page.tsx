'use client';
import {useAtomValue} from 'jotai';
import {my_vote_atom} from 'ui/atoms/vote/my_vote_atom';
import {Feedback} from 'ui/components/Word/Feedback';
import {Word} from 'ui/components/Word/Word';
import {WordDefinition} from 'ui/components/Word/WordDefinition';

export default function Home() {
  const my_vote = useAtomValue(my_vote_atom);
  console.log(my_vote);
  return (
    <>
      <Feedback />

      <Word />
      <WordDefinition />
    </>
  );
}
