'use client';

import {useAtomValue} from 'jotai';
import {upvotes_count_atom} from 'ui/atoms/vote/upvotes_count_atom';

export const UpVotesCounter = () => {
  const upvotes_count = useAtomValue(upvotes_count_atom);

  return <p>{upvotes_count}</p>;
};
