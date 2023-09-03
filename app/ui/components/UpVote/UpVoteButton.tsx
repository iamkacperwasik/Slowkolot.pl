'use client';

import {VoteRequestBody} from 'api/types';
import {useAtomValue} from 'jotai';
import {AiOutlineLike as UpVoteIcon} from 'react-icons/ai';
import {word_id_atom} from 'ui/atoms/word/word_id';

export const UpVoteButton = () => {
  const word_id = useAtomValue(word_id_atom);

  const upvote_word = async () => {
    const upvote_request_body = {
      word_id,
    } satisfies VoteRequestBody;

    await fetch('/api/upvote', {
      method: 'POST',
      body: JSON.stringify(upvote_request_body),
    });
  };

  return (
    <button className='cursor-pointer' onClick={upvote_word}>
      <UpVoteIcon />
    </button>
  );
};
