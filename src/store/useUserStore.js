import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: {
    name: `User-${Math.floor(Math.random() * 1000)}`,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
  },
})); 
