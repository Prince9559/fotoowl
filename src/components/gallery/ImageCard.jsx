import { useImageModalStore } from "../../store/useImageModalStore";
import EmojiBar from "../interactions/EmojiBar";

export default function ImageCard({ image }) {
  const openModal = useImageModalStore((s) => s.openModal);

  return (
    <div
      onClick={() => openModal(image)}
      className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition"
    >
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="w-full h-60 object-cover rounded-t-lg"
      />

      <div className="p-2">
        <EmojiBar imageId={image.id} />
      </div>
    </div>
  );
}
