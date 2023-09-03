import {VoteRequestBody} from 'api/types';
import {NextRequest} from 'next/server';
import {supabase_client} from 'supabase/client';

export const runtime = 'edge';

export async function POST({ip = '127.0.0.1', json: parse_body}: NextRequest) {
  const {word_id}: VoteRequestBody = await parse_body();

  if (!word_id) return;

  const {data: vote} = await supabase_client
    .from('votes')
    .select('ip, is_positive')
    .eq('ip', ip)
    .eq('word_id', word_id)
    .single();

  if (!vote) {
    await supabase_client.from('votes').insert({
      word_id,
      ip,
      is_positive: true,
    });
  }

  if (vote && vote.is_positive === true) {
    await supabase_client.from('votes').delete().eq('ip', ip).eq('word_id', word_id);
  }

  if (vote && vote.is_positive === false) {
    await supabase_client
      .from('votes')
      .update({
        is_positive: true,
      })
      .eq('ip', ip)
      .eq('word_id', word_id);
  }

  return new Response('ok');
}
