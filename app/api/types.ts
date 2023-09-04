export type VoteRequestBody = {
  word_id: number;
};

export type VoteResponseBody = {
  upvotes: number;
};

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
