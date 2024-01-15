import {NextRequest, NextResponse} from 'next/server';
import {supabase_client} from 'supabase/client';
import {MyVote} from 'ui/atoms/vote/my_vote_atom';

export const runtime = 'edge';

export type DataResponse = {
  ip: string;
  vote: MyVote;
};

type Payload = {
  word_id: number;
};

export async function POST({
  ip = '127.0.0.1',
  json: parse_body,
}: NextRequest): Promise<NextResponse<DataResponse>> {
  const payload: Payload = await parse_body();

  const {data: my_vote} = await supabase_client
    .from('votes')
    .select('is_positive')
    .eq('word_id', payload.word_id)
    .eq('ip', ip)
    .single();

  if (!my_vote) {
    return NextResponse.json({ip, vote: null});
  }

  return NextResponse.json({ip, vote: my_vote.is_positive ? 'upvote' : 'downvote'});
}
