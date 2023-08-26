import {supabaseClient} from 'supabase/client';
import {DbResult} from 'supabase/database.types';

export const getRandomWord = async () => {
  const query = supabaseClient
    .rpc('get_random_word')
    .select('word, definition, likes, dislikes')
    .single();

  const queryResponse: DbResult<typeof query> = await query;

  return queryResponse.data!;
};
