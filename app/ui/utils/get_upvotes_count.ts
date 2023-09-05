import {supabase_client} from 'supabase/client';

export const get_upvotes_count = async (word_id: number) => {
  const {count: upvotes} = await supabase_client
    .from('votes')
    .select('*', {count: 'exact', head: true})
    .eq('is_positive', true)
    .eq('word_id', word_id);

  return upvotes ?? 0;
};
