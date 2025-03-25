'use client'
import { ISlide } from "@repo/ui/types";
import { Button, Text } from "@repo/ui/units";
import Link from "next/link";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Locale } from "../../../i18n.config";
import { getDictionary, type Dictionary } from '../../utils/dictionary';

export default function HeroSlider({ slides, locale }: { slides: ISlide[], locale: Locale }) {
    const dictionary = getDictionary(locale) as any;
    const [videoOpen, setVideoOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
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
    
    return (
        <>
            <Slider {...settings}>
                {slides.map((slide, i) => (
                    <div key={slide.id} className="slider-item">
                        <section 
                            className="w-[100vw] md:min-h-[70vh] msm:min-h-[80vh] relative bg-cover bg-center"
                        >
                            <img 
                                src={slide.background_image} 
                                alt={slide.title}
                                loading="lazy"
                                className="absolute top-0 right-0 left-0 bottom-0 w-full h-full z-0 object-cover"
                                width={1920} height={1080}
                            />
                            <div className="flex flex-col msm:items-center justify-center absolute top-0 right-0 left-0 bottom-0 md:items-start gap-6 md:w-2/3 msm:w-full md:px-[10vw] msm:px-4 py-20 bg-gradient-to-r from-black to-transparent">
                                <Text variant="suptitle" className="md:text-start msm:text-center text-brand-white-60">
                                    BAMPOREZE
                                </Text>
                                <Text variant="title" className="md:text-start msm:text-center text-white">
                                    {slide.title}
                                </Text>
                                <Text variant="subtitle" className="md:text-start msm:text-center text-brand-white">
                                    {slide.description}
                                </Text>
                                {i === 0 && (
                                    <div className="flex items-center md:flex-row msm:flex-col gap-6 z-20 mt-4">
                                        <Link href="/contact">
                                            <Button variant="primary" className="msm:w-full md:w-fit px-8 py-3 text-lg">
                                                {dictionary.pages.home.hero.ctas.contact_us}
                                            </Button>
                                        </Link>
                                        <Button 
                                            variant="secondary" 
                                            className="msm:w-full md:w-fit text-white hover:bg-brand-darkblue/20 border border-white px-8 py-3 text-lg flex items-center gap-2"
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
                        </section>
                    </div>
                ))}
            </Slider>
            
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
                            {/* Option 1: Local Video with multiple fallback sources */}
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
                            
                            {/* Option 2: YouTube embed (commented out until you have a real YouTube ID)
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                                title="Bamporeze Introduction Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}