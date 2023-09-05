import {MyVoteRequestBody, MyVoteResponseBody} from 'api/types';

export const get_my_vote = async (word_id: number) => {
  const my_vote_request_body = {
    word_id,
  } satisfies MyVoteRequestBody;

  const my_vote_endpoint =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/my_vote'
      : 'https://www.slowkolot.pl/api/my_vote';

  const my_vote_response = await fetch(my_vote_endpoint, {
    method: 'POST',
    body: JSON.stringify(my_vote_request_body),
  });

  const {vote} = (await my_vote_response.json()) as MyVoteResponseBody;

  return vote;
};
