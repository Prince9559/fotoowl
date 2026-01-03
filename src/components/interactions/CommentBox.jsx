// src/components/interactions/CommentBox.jsx
import { useState } from "react";
import { tx, id } from "@instantdb/react";
import db from "../../api/instantdb";

export default function CommentBox({ imageId }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const addComment = async (e) => {
    e.stopPropagation(); // 👈 image open bug fix

    if (!text.trim()) return;

    try {
      await db.transact([
        tx.comments[id()].update({
          imageId,
          text,
          user: "Guest",
          createdAt: Date.now(),
        }),
      ]);

      setText("");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Comment failed");
    }
  };

  return (
    <div className="mt-2">
      <input
        value={text}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
        className="w-full border px-3 py-2 rounded text-sm"
      />

      <button
        onClick={addComment}
        className="mt-2 px-3 py-1 bg-black text-white rounded text-sm"
      >
        Send
      </button>

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
