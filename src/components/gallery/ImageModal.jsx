export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-3xl w-full mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className="w-full max-h-[80vh] object-contain"
        />

        <div className="p-4 flex justify-between items-center">
          <div>
            <p className="font-medium">{image.user.name}</p>
            <p className="text-sm text-gray-500">
              Photo on Unsplash
            </p>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1 bg-black text-white rounded text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
