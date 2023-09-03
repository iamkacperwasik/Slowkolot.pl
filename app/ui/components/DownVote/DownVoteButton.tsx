'use client';

import {VoteRequestBody} from 'api/types';
import {useAtomValue} from 'jotai';
import {AiOutlineDislike as DownVoteIcon} from 'react-icons/ai';
import {word_id_atom} from 'ui/atoms/word/word_id';

export const DownVoteButton = () => {
  const word_id = useAtomValue(word_id_atom);

  const downvote_word = async () => {
    const upvote_request_body = {
      word_id,
    } satisfies VoteRequestBody;

    await fetch('/api/downvote', {
      method: 'POST',
      body: JSON.stringify(upvote_request_body),
    });
  };

  return (
    <button className='cursor-pointer' onClick={downvote_word}>
      <DownVoteIcon />
    </button>
  );
};
