import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchImages } from "../../api/unsplash";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";

export default function GalleryGrid() 
{
  const [selectedImage, setSelectedImage] = useState(null);
  const page = 1;

  const { data: images, isLoading } = useQuery({
    queryKey: ["images", page],
    queryFn: () => fetchImages(page),
  });

  if (isLoading) {
    return <div className="text-center py-10">Loading photos...</div>;
  }

  return (
    <>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images?.map((img) => (
          <ImageCard
            key={img.id}
            image={img}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
