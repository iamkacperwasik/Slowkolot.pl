import {DataResponse} from 'api/data/route';

export const fetch_data = async (word_id: number) => {
  const base_url =
    process.env.NODE_ENV === 'production' ? 'https://www.slowkolot.pl' : 'http://localhost:3000';

  const data_response = await fetch(base_url + '/api/data', {
    method: 'POST',
    body: JSON.stringify({word_id}),
  });

  return (await data_response.json()) as DataResponse;
};
