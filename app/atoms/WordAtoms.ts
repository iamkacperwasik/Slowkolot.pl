'use client';

import {atom} from 'jotai';

export type Word = {
  word: string;
  definition: string;
  likes: number;
  dislikes: number;
};

export const wordAtom = atom('');
export const definitionAtom = atom('');

export const likesAtom = atom(0);
export const dislikesAtom = atom(0);
