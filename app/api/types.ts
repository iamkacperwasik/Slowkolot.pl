import {NextResponse} from 'next/server';
import {MyVote} from 'ui/atoms/vote/my_vote_atom';

export type VoteRequestBody = {
  word_id: number;
};

export type MyVoteRequestBody = {
  word_id: number;
};

export type MyVoteResponseBody = {vote: MyVote};
export type MyVoteResponse = NextResponse<MyVoteResponseBody>;

export type VoteResponseBody = {
  upvotes: number;
};
export type VoteResponse = NextResponse<VoteResponseBody>;

export type Vote = {
  ip: string;
  is_positive: boolean;
} | null;

export type VoteUtils = {
  fetch_vote: () => Promise<Vote>;
  fetch_upvote_count: () => Promise<number>;
  add_vote: (option: 'upvote' | 'downvote') => Promise<void>;
  update_vote_to: (option: 'upvote' | 'downvote') => Promise<void>;
  delete_vote: () => Promise<void>;
};

export type VoteRequestHandler = (vote: Vote, utils: VoteUtils) => any;
