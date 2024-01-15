import 'server-only';

import {supabase_client} from 'supabase/client';

export const get_random_word = async () => {
  const {data: random_word} = await supabase_client.rpc('get_random_word').select('*').single();

  return random_word!;
};
