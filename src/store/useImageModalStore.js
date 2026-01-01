import { create } from "zustand";

export const useImageModalStore = create((set) => ({
  selectedImage: null,

  openModal: (image) => set({ selectedImage: image }),
  closeModal: () => set({ selectedImage: null }),
}));
