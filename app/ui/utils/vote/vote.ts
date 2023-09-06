'use server';

import 'server-only';

import {supabase_client} from 'supabase/client';
import {MyVote} from 'ui/atoms/vote/my_vote_atom';
import {get_upvotes_count} from './get_upvotes_count';

export const vote = async (
  option: 'upvote' | 'downvote',
  my_vote: MyVote,
  word_id: number,
  ip: string,
) => {
  const is_positive = option === 'upvote' ? true : false;

  if (!my_vote) {
    await supabase_client.from('votes').insert({
      word_id,
      ip,
      is_positive,
    });
  }

  const delete_vote =
    (my_vote === 'upvote' && option === 'upvote') ||
    (my_vote === 'downvote' && option === 'downvote');

  if (delete_vote) {
    await supabase_client.from('votes').delete().eq('ip', ip).eq('word_id', word_id);
  } else {
    await supabase_client
      .from('votes')
      .update({
        is_positive,
      })
      .eq('ip', ip)
      .eq('word_id', word_id);
  }

  return await get_upvotes_count(word_id);
};
