import {MyVoteRequestBody, MyVoteResponseBody} from 'api/types';

export const get_my_vote = async (word_id: number) => {
  const my_vote_request_body = {
    word_id,
  } satisfies MyVoteRequestBody;

  const my_vote_response = await fetch('/api/my_vote', {
    method: 'POST',
    body: JSON.stringify(my_vote_request_body),
  });

  const {vote} = (await my_vote_response.json()) as MyVoteResponseBody;

  return vote;
};
