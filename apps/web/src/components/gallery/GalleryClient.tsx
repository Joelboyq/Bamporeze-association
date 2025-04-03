'use client';

import { useState } from "react";
import { Text } from "@repo/ui/units";
import Image from "next/image";
import WebSection from "../layouts/websection";
import ImageModal from "../units/ImageModal";
import { IPhoto } from "@repo/ui/types";

export default function GalleryClient({ galleryItems }: { galleryItems: IPhoto[] }) {
    const [selectedImage, setSelectedImage] = useState<IPhoto | null>(null);
    const [imageError, setImageError] = useState<{[key: string]: boolean}>({});
    
    return (
        <WebSection animate={false} about="Gallery">
            <div className="grid md:grid-cols-3 msm:grid-cols-1 gap-6 my-4">
                {galleryItems.map((photo, index) => (
                    <div 
                        key={photo.id || index} 
                        className="flex flex-col bg-white rounded-lg border border-brand-darkblue-10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                        onClick={() => setSelectedImage(photo)}
                    >
                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                            <Image 
                                src={imageError[photo.id] ? '/images/placeholder-image.jpg' : photo.image}
                                alt={photo.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                priority={index < 6} // Prioritize loading first 6 images
                                onError={() => setImageError(prev => ({ ...prev, [photo.id]: true }))}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="flex flex-col p-4 flex-grow">
                            <Text variant={'heading4'} className="mb-2 line-clamp-1">{photo.title}</Text>
                            <Text className="text-gray-600 line-clamp-2">
                                {photo.description || 'No description available'}
                            </Text>
                        </div>
                    </div>
                ))}
            </div>
            
            {selectedImage && (
                <ImageModal
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                    image={imageError[selectedImage.id] ? '/images/placeholder-image.jpg' : selectedImage.image}
                    title={selectedImage.title}
                    description={selectedImage.description || ''}
                />
            )}
        </WebSection>
    );
} 