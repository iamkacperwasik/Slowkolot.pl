'use client';

import {useVote} from 'ui/hooks/useVote';
import {DownVoteIcon} from 'ui/components/DownVote/DownVoteIcon';

export const DownVoteButton = () => {
  const vote = useVote();

  return (
    <button className='cursor-pointer' onClick={() => vote('downvote')}>
      <DownVoteIcon />
    </button>
  );
};
