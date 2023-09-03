'use client';

import {AiOutlineDislike as DownVoteIcon} from 'react-icons/ai';

export const DownVoteButton = () => {
  const downvote_word = async () => {};

  return (
    <button className='cursor-pointer' onClick={downvote_word}>
      <DownVoteIcon />
    </button>
  );
};
