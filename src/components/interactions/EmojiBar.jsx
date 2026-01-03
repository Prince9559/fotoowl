import { useReactionStore } from "../../store/useReactionStore";

const EMOJIS = ["❤️", "🔥", "😮"];

export default function EmojiBar({ imageId }) {
  const { reactions, addReaction } = useReactionStore();
  const imageReactions = reactions[imageId] || {};

  return (
    <div className="flex gap-3 mt-2">
      {EMOJIS.map((emoji) => (
        <button
          key={emoji}
          onClick={() => addReaction(imageId, emoji)}
          className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 text-sm"
        >
          {emoji} {imageReactions[emoji] || 0}
        </button>
      ))}
    </div>
  );
}
