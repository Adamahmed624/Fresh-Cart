"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const handleImageChange = (img: string) => {
    if (img === selectedImage) return;
    setIsChanging(true);
    setTimeout(() => {
      setSelectedImage(img);
      setIsChanging(false);
    }, 150);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-gray-200">
        <Image
          src={selectedImage}
          alt={title}
          fill
          className={`object-contain transition-opacity duration-300 ease-in-out ${
            isChanging ? "opacity-30" : "opacity-100"
          }`}
        />
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(img)}
            className={`relative h-24 w-24 shrink-0 overflow-hidden rounded-md border-2 transition-all duration-200 ${
              selectedImage === img
                ? "border-green-600 scale-95"
                : "border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`${title} - image ${index + 1}`}
              fill
              className="object-contain p-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
