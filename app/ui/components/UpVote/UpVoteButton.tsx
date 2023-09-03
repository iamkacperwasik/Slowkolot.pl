'use client';

import {AiOutlineLike as UpVoteIcon} from 'react-icons/ai';

export const UpVoteButton = () => {
  const upvote_word = async () => {};

  return (
    <button className='cursor-pointer' onClick={upvote_word}>
      <UpVoteIcon />
    </button>
  );
};
