'use client';

import {useAtomValue} from 'jotai';
import {upvotes_atom} from 'ui/atoms/vote/upvotes_atom';

export const UpVotesCounter = () => {
  const upvotes = useAtomValue(upvotes_atom);

  return <p>{upvotes}</p>;
};
