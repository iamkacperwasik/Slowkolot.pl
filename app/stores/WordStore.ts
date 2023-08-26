import {create} from 'zustand';

export type Word = {
  word: string;
  definition: string;
  likes: number;
  dislikes: number;
};

export type WordStore = Word & {
  updateWord: (newState: Partial<Word>) => void;
};

export const useWordStore = create<WordStore>((set, get) => ({
  word: '',
  definition: '',
  likes: 0,
  dislikes: 0,

  updateWord(newState) {
    const currentState = get();

    set(Object.assign(currentState, newState));
  },
}));
