import {supabase_client} from 'supabase/client';
import {DbResult} from 'supabase/helpers.types';

export const get_random_word = async () => {
  const query = supabase_client
    .rpc('get_random_word')
    .select('word, definition, likes, dislikes')
    .single();

  const queryResponse: DbResult<typeof query> = await query;

  return queryResponse.data!;
};
