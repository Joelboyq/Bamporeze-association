'use client'
import { ISlide } from "@repo/ui/types";
import { Button, Text } from "@repo/ui/units";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Locale } from "../../../i18n.config";
import { getDictionary } from '../../utils/dictionary';

export default function HeroSlider({ slides, locale }: { slides: ISlide[], locale: Locale }) {
    const dictionary = getDictionary(locale) as any;
    const [videoOpen, setVideoOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    
    // Set up slider settings - keep it simple
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };
    
    const openVideo = () => {
        setVideoOpen(true);
        // Allow time for modal to render before playing
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().catch(err => {
                    console.error("Error playing video:", err);
                });
            }
        }, 100);
    };
    
    const closeVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setVideoOpen(false);
    };
    
    // Use type casting to fix the TypeScript error
    const SliderComponent = Slider as any;
    
    return (
        <>
            {/* Simple global styles - no conditionals */}
            <style jsx global>{`
                .hero-slide {
                    position: relative;
                    width: 100vw;
                    background-color: #000000; /* Ensure dark background while loading */
                }
                
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.3));
                    z-index: 2;
                }
                
                .hero-image {
                    z-index: 1;
                }
                
                .hero-content {
                    position: absolute;
                    z-index: 10;
                    inset: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 20px 10vw;
                }
                
                @media (max-width: 768px) {
                    .hero-content {
                        align-items: center;
                        text-align: center;
                        padding: 20px 4vw;
                    }
                }
            `}</style>
            
            {/* Always render on both server and client */}
            <div className="relative bg-black">
                <SliderComponent {...settings}>
                    {slides.map((slide, i) => (
                        <div key={slide.id || i}>
                            <div className="hero-slide md:min-h-[80vh] msm:min-h-[90vh]">
                                {/* Backup background color is already applied in .hero-slide */}
                                
                                {/* Reliable static markup structure - this ensures SSR renders something */}
                                <div className="hero-image">
                                    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '80vh' }}>
                                        <Image 
                                            src={slide.background_image} 
                                            alt={slide.title}
                                            fill
                                            priority={i === 0} // Only prioritize first slide
                                            quality={80}
                                            sizes="100vw"
                                            style={{ 
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                        />
                                    </div>
                                </div>
                                
                                {/* Always present overlay */}
                                <div className="hero-overlay"></div>
                                
                                {/* Content with text */}
                                <div className="hero-content md:items-start msm:items-center gap-8 md:w-2/3 w-full">
                                    <Text className="text-white font-bold text-xl tracking-wider mb-3">
                                        BAMPOREZE
                                    </Text>
                                    <Text className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                                        {slide.title}
                                    </Text>
                                    <Text className="text-white text-xl md:text-2xl mb-6">
                                        {slide.description}
                                    </Text>
                                    {i === 0 && (
                                        <div className="flex items-center md:flex-row msm:flex-col gap-6 mt-4">
                                            <Link href="/contact">
                                                <Button variant="primary" className="msm:w-full md:w-fit px-8 py-3 text-lg">
                                                    {dictionary.pages.home.hero.ctas.contact_us}
                                                </Button>
                                            </Link>
                                            <Button 
                                                variant="secondary" 
                                                className="msm:w-full md:w-fit text-white hover:bg-black/20 border border-white px-8 py-3 text-lg flex items-center gap-2"
                                                onClick={openVideo}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                                    <path d="M8 5v14l11-7z"/>
                                                </svg>
                                                {dictionary.pages.home.hero.ctas.watch_yt}
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </SliderComponent>
            </div>
            
            {/* Video Modal with integrated player */}
            {videoOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                    <div className="relative w-full max-w-5xl rounded-lg overflow-hidden">
                        <button 
                            onClick={closeVideo}
                            className="absolute top-4 right-4 text-white text-2xl z-10 bg-black/50 w-10 h-10 rounded-full flex items-center justify-center"
                        >
                            ✕
                        </button>
                        
                        <div className="w-full aspect-video bg-black">
                            <video 
                                ref={videoRef}
                                controls
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    console.error("Video error:", e);
                                    alert("There was an error loading the video. Please try again later.");
                                }}
                            >
                                <source src="/videos/intro.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}