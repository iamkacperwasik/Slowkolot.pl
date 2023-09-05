import {VoteRequestBody, VoteResponseBody} from 'api/types';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import {my_vote_atom} from 'ui/atoms/vote/my_vote_atom';
import {upvotes_count_atom} from 'ui/atoms/vote/upvotes_count_atom';
import {word_id_atom} from 'ui/atoms/word/word_id';

export const useVote = () => {
  const word_id = useAtomValue(word_id_atom);
  const set_upvotes_count = useSetAtom(upvotes_count_atom);
  const [my_vote, set_my_vote] = useAtom(my_vote_atom);

  const vote_request_body = {
    word_id,
  } satisfies VoteRequestBody;

  const vote = async (option: 'upvote' | 'downvote') => {
    const vote_response = await fetch('/api/' + option, {
      method: 'POST',
      body: JSON.stringify(vote_request_body),
    });

    const {upvotes}: VoteResponseBody = await vote_response.json();

    set_upvotes_count(upvotes);

    if (option === 'upvote') {
      if (!my_vote) {
        set_my_vote('upvote');
      }

      if (my_vote === 'upvote') {
        set_my_vote(null);
      }

      if (my_vote === 'downvote') {
        set_my_vote('upvote');
      }
    }

    if (option === 'downvote') {
      if (!my_vote) {
        set_my_vote('downvote');
      }

      if (my_vote === 'downvote') {
        set_my_vote(null);
      }

      if (my_vote === 'upvote') {
        set_my_vote('downvote');
      }
    }
  };

  return {
    upvote: () => vote('upvote'),
    downvote: () => vote('downvote'),
  };
};
