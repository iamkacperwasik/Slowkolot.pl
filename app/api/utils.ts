import {NextRequest} from 'next/server';
import {supabase_client} from 'supabase/client';
import {VoteRequestBody, VoteRequestHandler, VoteUtils} from 'api/types';

export const handle_vote_request = async (
  {ip = '127.0.0.1', json: parse_body}: NextRequest,
  handler: VoteRequestHandler,
) => {
  const {word_id}: VoteRequestBody = await parse_body();
  if (!word_id) return;

  const utils = {
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
      const {count: upvotes} = await supabase_client
        .from('votes')
        .select('*', {count: 'exact', head: true})
        .eq('is_positive', true)
        .eq('word_id', word_id);

      return upvotes ?? 0;
    },

    add_vote: async (option) => {
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

    update_vote_to: async (option) => {
      const is_positive = option === 'upvote' ? true : false;

      await supabase_client
        .from('votes')
        .update({
          is_positive,
        })
        .eq('ip', ip)
        .eq('word_id', word_id);
    },
  } satisfies VoteUtils;

  const vote = await utils.fetch_vote();

  return handler(vote, utils);
};
