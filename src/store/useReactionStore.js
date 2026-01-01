import { create } from "zustand";

export const useReactionStore = create((set) => ({
  reactions: {},

  addReaction: (imageId, emoji) =>
    set((state) => {
      const imageReactions = state.reactions[imageId] || {};
      const count = imageReactions[emoji] || 0;

      return {
        reactions: {
          ...state.reactions,
          [imageId]: {
            ...imageReactions,
            [emoji]: count + 1,
          },
        },
      };
    }),
}));
