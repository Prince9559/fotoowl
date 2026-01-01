import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchImages } from "../../api/unsplash";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const page = 1;

  const { data, isLoading } = useQuery({
    queryKey: ["images", page],
    queryFn: () => fetchImages(page),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.map((img) => (
          <div key={img.id} onClick={() => setSelectedImage(img)}>
            <ImageCard image={img} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
