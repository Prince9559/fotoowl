import { useImageModalStore } from "../../store/useImageModalStore";
import EmojiBar from "../interactions/EmojiBar";

export default function ImageModal() {
  const { selectedImage, closeModal } = useImageModalStore();

  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white max-w-3xl w-full rounded-lg overflow-hidden relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-xl"
        >
          ✕
        </button>

        <img
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
          className="w-full max-h-[70vh] object-contain"
        />

        <div className="p-4">
          <EmojiBar imageId={selectedImage.id} />
        </div>
      </div>
    </div>
  );
}
