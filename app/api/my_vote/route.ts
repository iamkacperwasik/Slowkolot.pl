import {MyVoteResponse} from 'api/types';
import {handle_vote_request} from 'api/utils';
import {NextRequest, NextResponse} from 'next/server';

export const runtime = 'edge';

export function POST(request: NextRequest) {
  return handle_vote_request(request, async (vote): Promise<MyVoteResponse> => {
    if (!vote) {
      return NextResponse.json({
        vote: null,
      });
    }

    return NextResponse.json({
      vote: vote.is_positive ? 'upvote' : 'downvote',
    });
  });
}
