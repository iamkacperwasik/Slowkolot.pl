import {VoteRequestBody} from 'api/types';
import {create_utils} from 'api/utils';
import {NextRequest, NextResponse} from 'next/server';

export const runtime = 'edge';

export async function POST({ip = '127.0.0.1', json: parse_body}: NextRequest) {
  const {word_id}: VoteRequestBody = await parse_body();
  if (!word_id) return;

  const {fetch_vote, add_vote, delete_vote, update_vote_to, fetch_upvote_count} = create_utils(
    word_id,
    ip,
  );

  const vote = await fetch_vote();

  if (!vote) {
    await add_vote('downvote');
  }

  if (vote && vote.is_positive === false) {
    await delete_vote();
  }

  if (vote && vote.is_positive === true) {
    await update_vote_to('downvote');
  }

  return NextResponse.json({
    upvotes: await fetch_upvote_count(),
  });
}
