import {supabase_client} from 'supabase/client';

export const get_random_word = async () => {
  const get_random_word_query = supabase_client.rpc('get_random_word').select('*').single();

  const {data: random_word} = await get_random_word_query;

  return random_word!;
};
