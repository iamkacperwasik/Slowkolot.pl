'use client';

import {useVote} from 'ui/hooks/useVote';
import {UpVoteIcon} from 'ui/components/UpVote/UpVoteIcon';

export const UpVoteButton = () => {
  const vote = useVote();

  return (
    <button className='cursor-pointer' onClick={() => vote('upvote')}>
      <UpVoteIcon />
    </button>
  );
};
