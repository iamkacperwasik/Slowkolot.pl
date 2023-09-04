'use client';

import {VoteRequestBody, VoteResponseBody} from 'api/types';
import {useAtomValue, useSetAtom} from 'jotai';
import {AiOutlineLike as UpVoteIcon} from 'react-icons/ai';
import {upvotes_atom} from 'ui/atoms/vote/upvotes_atom';
import {word_id_atom} from 'ui/atoms/word/word_id';

export const UpVoteButton = () => {
  const word_id = useAtomValue(word_id_atom);
  const set_upvotes = useSetAtom(upvotes_atom);

  const upvote_word = async () => {
    const upvote_request_body = {
      word_id,
    } satisfies VoteRequestBody;

    const upvote_response = await fetch('/api/upvote', {
      method: 'POST',
      body: JSON.stringify(upvote_request_body),
    });

    const {upvotes}: VoteResponseBody = await upvote_response.json();

    set_upvotes(upvotes);
  };

  return (
    <button className='cursor-pointer' onClick={upvote_word}>
      <UpVoteIcon />
    </button>
  );
};
