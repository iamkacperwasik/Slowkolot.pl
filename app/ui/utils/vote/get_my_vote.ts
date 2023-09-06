import 'server-only';

import {supabase_client} from 'supabase/client';

export const get_my_vote = async (word_id: number, ip: string) => {
  const {data: my_vote} = await supabase_client
    .from('votes')
    .select('is_positive')
    .eq('word_id', word_id)
    .eq('ip', ip)
    .single();

  if (!my_vote) return null;

  return my_vote.is_positive ? 'upvote' : 'downvote';
};
