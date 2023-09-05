'use client';

import {useVote} from 'ui/hooks/useVote';
import {UpVoteIcon} from './UpVoteIcon';

export const UpVoteButton = () => {
  const {upvote} = useVote();

  return (
    <button className='cursor-pointer' onClick={upvote}>
      <UpVoteIcon />
    </button>
  );
};
