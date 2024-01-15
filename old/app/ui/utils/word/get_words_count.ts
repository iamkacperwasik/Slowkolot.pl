import 'server-only';

import {supabase_client} from 'supabase/client';

export const get_words_count = async () => {
  const {count: words_count} = await supabase_client
    .from('words')
    .select('*', {count: 'exact', head: true});

  return words_count ?? 0;
};
