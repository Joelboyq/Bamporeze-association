'use client'
import { ISlide } from "@repo/ui/types";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Locale } from "../../../i18n.config";
import { getDictionary } from '../../utils/dictionary';
import { useState } from "react";

export default function HeroSlider({ slides, locale }: { slides: ISlide[], locale: Locale }) {
    const [activeSlide, setActiveSlide] = useState(0);
    
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'ease-in-out',
        arrows: false,
        beforeChange: (_: any, next: number) => setActiveSlide(next),
    };
    
    // Fallback slides if API data is not available
    const fallbackSlides: ISlide[] = [
        {
            id: "1",
            title: "Empowering women. Protecting children. Transforming communities.",
            description: "Bamporeze Association is a women-led Rwandan nonprofit organization established in 1996, committed to supporting vulnerable children, youth, women, and families through transformative approaches to alleviating poverty and building resiliency.",
            background_image: "/images/hero-bg-1.jpg"
        }
    ];

    const displaySlides = slides && slides.length > 0 ? slides : fallbackSlides;
    
    return (
        <div className="relative w-full overflow-hidden">
            {/* Hero Slider - Full viewport height */}
            <div className="relative h-screen w-full">
                <Slider {...settings} className="h-full">
                    {displaySlides.map((slide, index) => (
                        <div key={slide.id} className="relative h-screen w-full">
                            {/* Background Image Container */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={slide.background_image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                    style={{ 
                                        objectPosition: 'center center',
                                        objectFit: 'cover'
                                    }}
                                    priority={index === 0}
                                    sizes="100vw"
                                    quality={90}
                                />
                                {/* Enhanced overlay for better text contrast */}
                                <div className="absolute inset-0 bg-black/50"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
                            </div>
                            
                            {/* Content Container */}
                            <div className="relative z-10 flex items-center justify-center h-full w-full">
                                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="text-center max-w-5xl mx-auto">
                                        {/* Main Title - Responsive Typography */}
                                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">
                                            {slide.title}
                                        </h1>
                                        
                                        {/* Description with improved mobile styling */}
                                        <div className="max-w-4xl mx-auto">
                                            <div className="bg-green-600/95 backdrop-blur-sm px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-6 rounded-lg md:rounded-xl shadow-xl">
                                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-medium leading-relaxed">
                                                    {slide.description}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Optional CTA Button */}
                                        <div className="mt-6 sm:mt-8 md:mt-10">
                                            <button className="bg-white/90 hover:bg-white text-green-600 font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                
                {/* Slide Indicators */}
                {displaySlides.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="flex space-x-2">
                            {displaySlides.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                        index === activeSlide 
                                            ? 'bg-white scale-125' 
                                            : 'bg-white/50 hover:bg-white/80'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}