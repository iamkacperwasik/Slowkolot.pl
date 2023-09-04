'use client';

import {VoteRequestBody, VoteResponseBody} from 'api/types';
import {useAtomValue, useSetAtom} from 'jotai';
import {AiOutlineDislike as DownVoteIcon} from 'react-icons/ai';
import {upvotes_atom} from 'ui/atoms/vote/upvotes_atom';
import {word_id_atom} from 'ui/atoms/word/word_id';

export const DownVoteButton = () => {
  const word_id = useAtomValue(word_id_atom);
  const set_upvotes = useSetAtom(upvotes_atom);

  const downvote_word = async () => {
    const upvote_request_body = {
      word_id,
    } satisfies VoteRequestBody;

    const downvote_response = await fetch('/api/downvote', {
      method: 'POST',
      body: JSON.stringify(upvote_request_body),
    });

    const {upvotes}: VoteResponseBody = await downvote_response.json();

    set_upvotes(upvotes);
  };

  return (
    <button className='cursor-pointer' onClick={downvote_word}>
      <DownVoteIcon />
    </button>
  );
};
