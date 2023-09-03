'use client';

import {useAtomValue} from 'jotai';
import {up_votes_atom} from 'ui/atoms/vote/upvotes_atom';

export const UpVotesCounter = () => {
  const up_votes = useAtomValue(up_votes_atom);

  return <p>{up_votes}</p>;
};
