'use client'
import { ISlide } from "@repo/ui/types";
import { Text } from "@repo/ui/units";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Locale } from "../../../i18n.config";
import { getDictionary } from '../../utils/dictionary';
import { useRef, useState } from "react";

export default function HeroSlider({ slides, locale }: { slides: ISlide[], locale: Locale }) {
    const dictionary = getDictionary(locale) as any;
    const [videoOpen, setVideoOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        beforeChange: (_: any, next: number) => setActiveSlide(next),
    };
    
    const openVideo = () => {
        // Pause slider autoplay when video opens
        const slider = document.querySelector('.slick-slider') as any;
        if (slider && slider.slickPause) {
            slider.slickPause();
        }
        
        setVideoOpen(true);
        
        // Give browser time to render modal before playing
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().catch(err => {
                    console.error("Error playing video:", err);
                });
            }
        }, 100);
    };
    
    const closeVideo = () => {
        // Resume slider autoplay when video closes
        const slider = document.querySelector('.slick-slider') as any;
        if (slider && slider.slickPlay) {
            slider.slickPlay();
        }
        
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setVideoOpen(false);
    };
    
    return (
        <div className="relative w-full">
            <Slider {...settings} className="w-full">
                {slides.map((slide, i) => (
                    <div key={slide.id || i} className="relative md:h-[80vh] msm:h-[90vh]">
                        {/* Background image - with Next.js Image */}
                        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                            <Image
                                src={slide.background_image}
                                alt={slide.title}
                                fill
                                priority={i === 0}
                                quality={85}
                                sizes="100vw"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center"
                                }}
                            />
                        </div>
                        
                        {/* Simple dark overlay with fixed opacity */}
                        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                        
                        {/* Content */}
                        <div className="relative z-20 h-full flex items-center">
                            <div className="container mx-auto px-8">
                                {/* Desktop layout */}
                                <div className="md:block msm:hidden">
                                    <div className="max-w-2xl">
                                        <h1 className="text-white font-bold text-xl tracking-wider mb-4">
                                            BAMPOREZE
                                        </h1>
                                        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-lg">
                                            {slide.title}
                                        </h1>
                                        <h2 className="text-white text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-md">
                                            {slide.description}
                                        </h2>
                                        
                                        {i === activeSlide && i === 0 && (
                                            <div className="flex items-center gap-6 mt-4">
                                                <Link href="/contact">
                                                    <button className="bg-green-700 hover:bg-green-800 text-white font-medium rounded-md px-8 py-3 text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
                                                        {dictionary.pages.home.hero.ctas.contact_us}
                                                    </button>
                                                </Link>
                                                <button 
                                                    className="border border-white text-white hover:bg-white/20 font-medium rounded-md px-8 py-3 text-lg flex items-center gap-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                                                    onClick={openVideo}
                                                    type="button"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                    {dictionary.pages.home.hero.ctas.watch_yt}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Mobile layout */}
                                <div className="md:hidden msm:block text-center">
                                    <Text className="text-white font-bold text-xl tracking-wider mb-4">
                                        BAMPOREZE
                                    </Text>
                                    <Text className="text-white font-bold text-4xl leading-tight mb-6 drop-shadow-lg">
                                        {slide.title}
                                    </Text>
                                    <Text className="text-white text-lg mb-8 drop-shadow-md">
                                        {slide.description}
                                    </Text>
                                    
                                    {i === activeSlide && i === 0 && (
                                        <div className="flex flex-col items-center gap-4 mt-4">
                                            <Link href="/contact" className="w-full">
                                                <button className="w-full bg-green-700 hover:bg-green-800 text-white font-medium rounded-md px-8 py-3 text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
                                                    {dictionary.pages.home.hero.ctas.contact_us}
                                                </button>
                                            </Link>
                                            <button 
                                                className="w-full border border-white text-white hover:bg-white/20 font-medium rounded-md px-8 py-3 text-lg flex items-center justify-center gap-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                                                onClick={openVideo}
                                                type="button"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                                    <path d="M8 5v14l11-7z"/>
                                                </svg>
                                                {dictionary.pages.home.hero.ctas.watch_yt}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            
            {/* Custom pagination indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30">
                <div className="flex space-x-4">
                    {slides.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => {
                                const slider = document.querySelector('.slick-slider') as any;
                                if (slider && slider.slickGoTo) {
                                    slider.slickGoTo(index);
                                }
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === activeSlide 
                                    ? 'bg-white' 
                                    : 'bg-white/50 hover:bg-white/70'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                            type="button"
                        />
                    ))}
                </div>
            </div>
            
            {/* Video Modal */}
            {videoOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fadeIn">
                    <div className="relative w-full max-w-5xl rounded-lg overflow-hidden">
                        <button 
                            onClick={closeVideo}
                            className="absolute top-4 right-4 text-white text-2xl z-10 bg-black/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                            type="button"
                            aria-label="Close video"
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
        </div>
    );
}