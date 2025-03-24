'use client';

import { useState } from "react";
import { Text } from "@repo/ui/units";
import Image from "next/image";
import WebSection from "../layouts/websection";
import ImageModal from "../units/ImageModal";
import { IPhoto } from "@repo/ui/types";

export default function GalleryClient({ galleryItems }: { galleryItems: IPhoto[] }) {
    const [selectedImage, setSelectedImage] = useState<IPhoto | null>(null);
    
    return (
        <WebSection animate={false} about="Gallery">
            <div className="grid md:grid-cols-3 msm:grid-cols-1 gap-[1px] my-4">
                {
                    galleryItems.map((photo, index) => (
                        <div 
                            key={photo.id || index} 
                            className="flex flex-col gap-3 items-start bg-white border border-brand-darkblue-10 h-full cursor-pointer hover:scale-105 duration-300 transition-all"
                            onClick={() => setSelectedImage(photo)}
                        >
                            <Image 
                                src={photo.image} 
                                alt={photo.title} 
                                className="w-full object-cover" 
                                width={300} 
                                height={300} 
                            />
                            <div className="flex flex-col p-4">
                                <Text variant={'heading4'}>{photo.title}</Text>
                                <Text>{photo.description?.length > 60 ? `${photo.description.slice(0, 60)}...` : photo.description}</Text>
                            </div>
                        </div>
                    ))
                }
            </div>
            
            {selectedImage && (
                <ImageModal
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                    image={selectedImage.image}
                    title={selectedImage.title}
                    description={selectedImage.description || ''}
                />
            )}
        </WebSection>
    );
} 