import {supabase_client} from 'supabase/client';

export const create_utils = (word_id: number, ip: string) => ({
  fetch_vote: async () => {
    const {data: vote} = await supabase_client
      .from('votes')
      .select('ip, is_positive')
      .eq('ip', ip)
      .eq('word_id', word_id)
      .single();

    return vote;
  },

  fetch_upvote_count: async () => {
    const {count: upvotes = 0} = await supabase_client
      .from('votes')
      .select('*', {count: 'exact', head: true})
      .eq('is_positive', true)
      .eq('word_id', word_id);

    return upvotes;
  },

  add_vote: async (option: 'upvote' | 'downvote') => {
    const is_positive = option === 'upvote' ? true : false;

    await supabase_client.from('votes').insert({
      word_id,
      ip,
      is_positive,
    });
  },

  delete_vote: async () => {
    await supabase_client.from('votes').delete().eq('ip', ip).eq('word_id', word_id);
  },

  update_vote_to: async (option: 'upvote' | 'downvote') => {
    const is_positive = option === 'upvote' ? true : false;

    await supabase_client
      .from('votes')
      .update({
        is_positive,
      })
      .eq('ip', ip)
      .eq('word_id', word_id);
  },
});
