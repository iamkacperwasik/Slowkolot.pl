'use client';

import {AiOutlineDislike as DownVoteIcon} from 'react-icons/ai';
import {useVote} from 'ui/hooks/useVote';

export const DownVoteButton = () => {
  const {downvote} = useVote();

  return (
    <button className='cursor-pointer' onClick={downvote}>
      <DownVoteIcon />
    </button>
  );
};
