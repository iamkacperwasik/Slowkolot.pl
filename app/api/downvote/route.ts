import {handle_vote_request} from 'api/utils';
import {NextRequest, NextResponse} from 'next/server';

export const runtime = 'edge';

export function POST(request: NextRequest) {
  handle_vote_request(request, async (vote, actions) => {
    if (!vote) {
      await actions.add_vote('downvote');
    }

    if (vote && vote.is_positive === false) {
      await actions.delete_vote();
    }

    if (vote && vote.is_positive === true) {
      await actions.update_vote_to('downvote');
    }

    return NextResponse.json({
      upvotes: await actions.fetch_upvote_count(),
    });
  });
}
