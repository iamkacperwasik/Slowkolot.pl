import {atom} from 'jotai';

export type MyVote = null | 'upvote' | 'downvote';

export const my_vote_atom = atom<MyVote>(null);
