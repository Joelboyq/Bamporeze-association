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
        <div className="relative w-full">
            {/* Hero Slider */}
            <div className="relative h-screen min-h-[700px]">
                <Slider {...settings} className="h-full">
                    {displaySlides.map((slide, index) => (
                        <div key={slide.id} className="relative h-screen">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={slide.background_image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                                {/* Subtle overlay for better text readability */}
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                            
                            {/* Centered Content */}
                            <div className="relative z-20 flex items-center justify-center h-full">
                                <div className="text-center">
                                    {/* Main Title */}
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                                        {slide.title}
                                    </h1>
                                    
                                    {/* Green Pill-shaped Subtitle */}
                                    <div className="inline-block bg-green-600 px-8 py-3 rounded-full">
                                        <p className="text-xl md:text-2xl text-white font-medium">
                                            {slide.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}