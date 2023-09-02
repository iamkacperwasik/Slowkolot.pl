'use client';

import {useAtomValue} from 'jotai';
import {likesAtom} from 'word/atoms/WordAtoms';

export const LikeCounter = () => {
  const likes = useAtomValue(likesAtom);

  return <p>{likes}</p>;
};
