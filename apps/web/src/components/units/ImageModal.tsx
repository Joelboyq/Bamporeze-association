'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
}

export default function ImageModal({ isOpen, onClose, image, title, description }: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80" onClick={onClose} />
      
      <div className="relative w-full max-w-7xl mx-auto rounded-lg bg-white p-3 sm:p-4 md:p-6 shadow-2xl z-10">
        {/* Fixed positioned close button that's always visible */}
        <button 
          onClick={onClose}
          className="fixed top-4 right-4 rounded-full bg-white p-3 shadow-md hover:bg-gray-100 transition-colors z-50 flex items-center justify-center"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh]">
          <Image 
            src={image} 
            alt={title} 
            className="object-contain" 
            fill={true}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
          />
        </div>
        
        <div className="mt-4 px-2">
          <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-600 text-base sm:text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
} 