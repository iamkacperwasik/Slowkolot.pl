import {useAtomValue} from 'jotai';
import {AiOutlineDislike as UnDownvotedIcon, AiFillDislike as DownvotedIcon} from 'react-icons/ai';
import {my_vote_atom} from 'ui/atoms/vote/my_vote_atom';

export const DownVoteIcon = () => {
  const my_vote = useAtomValue(my_vote_atom);

  if (my_vote === 'downvote') return <DownvotedIcon />;

  return <UnDownvotedIcon />;
};
