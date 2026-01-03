import EmojiBar from "../interactions/EmojiBar";
import CommentBox from "../interactions/CommentBox";

export default function ImageCard({ image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
    >
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="w-full h-60 object-cover"
      />

      <div
        className="p-3"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="text-sm font-medium">
          {image.user.name}
        </div>

        <EmojiBar imageId={image.id} />
        <CommentBox imageId={image.id} />
      </div>
    </div>
  );
}
