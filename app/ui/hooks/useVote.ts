'use client';

import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import {my_ip_atom} from 'ui/atoms/ip/my_ip';
import {my_vote_atom} from 'ui/atoms/vote/my_vote_atom';
import {upvotes_count_atom} from 'ui/atoms/vote/upvotes_count_atom';
import {word_id_atom} from 'ui/atoms/word/word_id';
import {vote} from 'ui/utils/vote/vote';

export const useVote = () => {
  const [my_vote, set_my_vote] = useAtom(my_vote_atom);
  const word_id = useAtomValue(word_id_atom);
  const ip = useAtomValue(my_ip_atom);
  const set_upvotes_count = useSetAtom(upvotes_count_atom);

  return async (option: 'upvote' | 'downvote') => {
    const upvotes_count = await vote(option, my_vote, word_id, ip);

    const delete_vote =
      (my_vote === 'upvote' && option === 'upvote') ||
      (my_vote === 'downvote' && option === 'downvote');

    if (!my_vote || !delete_vote) {
      set_my_vote(option);
    } else {
      set_my_vote(null);
    }

    set_upvotes_count(upvotes_count);
  };
};
