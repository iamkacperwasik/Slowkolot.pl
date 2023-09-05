'use client';

import {useVote} from 'ui/hooks/useVote';
import {DownVoteIcon} from './DownVoteIcon';

export const DownVoteButton = () => {
  const {downvote} = useVote();

  return (
    <button className='cursor-pointer' onClick={downvote}>
      <DownVoteIcon />
    </button>
  );
};
