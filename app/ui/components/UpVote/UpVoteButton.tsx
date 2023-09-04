'use client';

import {AiOutlineLike as UpVoteIcon} from 'react-icons/ai';
import {useVote} from 'ui/hooks/useVote';

export const UpVoteButton = () => {
  const {upvote} = useVote();

  return (
    <button className='cursor-pointer' onClick={upvote}>
      <UpVoteIcon />
    </button>
  );
};
