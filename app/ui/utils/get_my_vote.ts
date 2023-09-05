import {MyVoteRequestBody, MyVoteResponseBody} from 'api/types';

export const get_my_vote = async (word_id: number) => {
  const my_vote_request_body = {
    word_id,
  } satisfies MyVoteRequestBody;

  const base_url =
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://www.slowkolot.pl';

  const my_vote_response = await fetch(base_url + '/api/my_vote', {
    method: 'POST',
    body: JSON.stringify(my_vote_request_body),
  });

  const {vote}: MyVoteResponseBody = await my_vote_response.json();

  return vote;
};
