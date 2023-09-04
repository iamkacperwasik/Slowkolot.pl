import {VoteRequestBody, VoteResponseBody} from 'api/types';
import {useAtomValue, useSetAtom} from 'jotai';
import {upvotes_atom} from 'ui/atoms/vote/upvotes_atom';
import {word_id_atom} from 'ui/atoms/word/word_id';

export const useVote = () => {
  const word_id = useAtomValue(word_id_atom);
  const set_upvotes = useSetAtom(upvotes_atom);

  const vote_request_body = {
    word_id,
  } satisfies VoteRequestBody;

  const vote = async (option: 'upvote' | 'downvote') => {
    const vote_response = await fetch('/api/' + option, {
      method: 'POST',
      body: JSON.stringify(vote_request_body),
    });

    const {upvotes}: VoteResponseBody = await vote_response.json();

    set_upvotes(upvotes);
  };

  return {
    upvote: () => vote('upvote'),
    downvote: () => vote('downvote'),
  };
};
