'use client'
import { ISlide } from "@repo/ui/types";
import Image from "next/image";
import Link from "next/link";
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
            background_image: "/images/about_pic_1.jpg"
        }
    ];

    const displaySlides = slides && slides.length > 0 ? slides : fallbackSlides;
    
    return (
        <div className="relative w-full overflow-hidden">
            {/* Hero Slider - Responsive height */}
            <div className="relative h-[70vh] sm:h-[80vh] md:h-screen w-full">
                <Slider {...settings} className="h-full">
                    {displaySlides.map((slide, index) => (
                        <div key={slide.id} className="relative h-[70vh] sm:h-[80vh] md:h-screen w-full">
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
                                <div className="w-full px-4 sm:px-6 lg:px-8">
                                    <div className="text-center flex flex-col items-center justify-center">
                                        {/* Main Title - Better mobile centered */}
                                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 md:mb-10 leading-tight max-w-4xl">
                                            {slide.title}
                                        </h1>
                                        
                                        {/* Description - Cleaner mobile design */}
                                        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mb-6 sm:mb-8 md:mb-10">
                                            <div className="bg-green-600/95 backdrop-blur-sm px-5 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 rounded-2xl shadow-2xl">
                                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed font-medium">
                                                    {slide.description}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* CTA Button - Centered and properly sized */}
                                        <Link 
                                            href={`/${locale}/about`}
                                            className="bg-white hover:bg-white/95 text-green-600 font-bold px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-block"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                
                {/* Slide Indicators - Better mobile positioning */}
                {displaySlides.length > 1 && (
                    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="flex space-x-2 sm:space-x-3">
                            {displaySlides.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
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