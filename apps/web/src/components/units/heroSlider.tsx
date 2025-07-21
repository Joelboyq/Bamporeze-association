'use client'
import { ISlide } from "@repo/ui/types";
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
        const slider = document.querySelector('.slick-slider') as any;
        if (slider && slider.slickPause) {
            slider.slickPause();
        }
        
        setVideoOpen(true);
        
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().catch(err => {
                    console.error("Error playing video:", err);
                });
            }
        }, 100);
    };
    
    const closeVideo = () => {
        const slider = document.querySelector('.slick-slider') as any;
        if (slider && slider.slickPlay) {
            slider.slickPlay();
        }
        
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setVideoOpen(false);
    };
    
    const SliderComponent = Slider as any;
    
    return (
        <div className="relative w-full">
            <SliderComponent {...settings} className="w-full">
                {slides.map((slide, i) => (
                    <div key={slide.id || i} className="relative h-screen min-h-[600px]">
                        {/* Split layout container */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 h-full sm:-[200px]">
                            
                            {/* Text Content Side */}
                            <div className="relative z-20 flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 md:bg-none lg:bg-white order-2 lg:order-1">
                                <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left max-w-2xl">
                                    {/* Brand */}
                                    <div className="mb-4 md:mb-6">
                                        <span className="text-white lg:text-gray-800 font-bold text-base md:text-lg lg:text-xl tracking-[0.2em] uppercase">
                                            BAMPOREZE
                                        </span>
                                    </div>
                                    
                                    {/* Main Title */}
                                    <h1 className="text-white lg:text-gray-900 font-bold leading-tight mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                        {slide.title}
                                    </h1>
                                    
                                    {/* Description */}
                                    <p className="text-white/90 lg:text-gray-700 mb-8 md:mb-12 leading-relaxed text-lg sm:text-xl md:text-2xl">
                                        {slide.description}
                                    </p>
                                    
                                    {/* Buttons - Only show on first slide */}
                                    {i === activeSlide && i === 0 && (
                                        <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 sm:gap-6">
                                            <Link href="/contact">
                                                <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-8 py-4 text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]">
                                                    {dictionary.pages.home.hero.ctas.contact_us}
                                                </button>
                                            </Link>
                                            <button 
                                                className="w-full sm:w-auto border-2 border-green-600 lg:border-gray-400 text-white lg:text-gray-800 hover:bg-green-600 hover:text-white lg:hover:bg-gray-800 lg:hover:text-white lg:hover:border-gray-800 font-semibold rounded-lg px-8 py-4 text-lg md:text-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
                                                onClick={openVideo}
                                                type="button"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path d="M8 5v14l11-7z"/>
                                                </svg>
                                                {dictionary.pages.home.hero.ctas.watch_yt}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="relative overflow-hidden order-1 lg:order-2 bg-gray-100">
                                {/* Background image with higher quality - fits within container */}
                                <div className="absolute inset-0 z-0 flex items-center justify-center p-4 lg:p-8">
                                    <div className="hidden sm:block md:block lg:block relative w-full h-full">
                                        <Image
                                            src={slide.background_image}
                                            alt={slide.title}
                                            fill
                                            priority={i === 0}
                                            quality={95}
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                
                                {/* Light overlay for mobile only */}
                                <div className="absolute inset-0 bg-black/10 lg:bg-transparent z-10"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </SliderComponent>
            
            {/* Pagination dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30">
                <div className="flex space-x-3">
                    {slides.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => {
                                const slider = document.querySelector('.slick-slider') as any;
                                if (slider && slider.slickGoTo) {
                                    slider.slickGoTo(index);
                                }
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                                index === activeSlide 
                                    ? 'bg-green-600 shadow-lg' 
                                    : 'bg-gray-400 hover:bg-gray-600'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                            type="button"
                        />
                    ))}
                </div>
            </div>
            
            {/* Video Modal */}
            {videoOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
                    <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl">
                        <button 
                            onClick={closeVideo}
                            className="absolute top-4 right-4 text-white text-2xl z-10 bg-black/60 w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/80 transition-all duration-200 transform hover:scale-110"
                            type="button"
                            aria-label="Close video"
                        >
                            ✕
                        </button>
                        
                        <video 
                            ref={videoRef}
                            controls
                            className="w-full h-full object-cover"
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
            )}
        </div>
    );
}