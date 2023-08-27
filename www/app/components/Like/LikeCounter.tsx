'use client';

import {likesAtom} from 'atoms/WordAtoms';
import {useAtomValue} from 'jotai';

export const LikeCounter = () => {
  const likes = useAtomValue(likesAtom);

  return <p>{likes}</p>;
};
