import {useAtomValue} from 'jotai';
import {my_vote_atom} from 'ui/atoms/vote/my_vote_atom';
import {AiOutlineLike as UnUpvotedIcon, AiFillLike as UpvotedIcon} from 'react-icons/ai';

export const UpVoteIcon = () => {
  const my_vote = useAtomValue(my_vote_atom);

  if (my_vote === 'upvote') return <UpvotedIcon />;

  return <UnUpvotedIcon />;
};
