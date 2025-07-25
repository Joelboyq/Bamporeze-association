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
            <div className="relative h-screen min-h-[600px] grid grid-cols-1 lg:grid-cols-2 mt-0 pt-0 py-0">
                {/* Image Side with overlay/stat */}
                <div className="relative order-1 lg:order-2 flex items-center justify-center bg-transparent px-4 py-0 lg:py-0">
                    <div className="relative max-w-lg w-full rounded-3xl shadow-2xl overflow-hidden border-l-8 border-green-600 bg-white">
                        <Image
                            src={slides[0]?.background_image || '/images/hero-fr.jpg'}
                            alt={slides[0]?.title || 'Bamporeze Hero'}
                            width={600}
                            height={400}
                            quality={95}
                            className="object-cover w-full h-[320px] md:h-[400px] lg:h-[480px]"
                            style={{ borderRadius: '1.5rem' }}
                        />
                        {/* Stat Badge */}
                        <div className="absolute top-4 left-4 bg-white/90 text-brand-darkblue font-bold px-5 py-2 rounded-full shadow-lg z-20 text-base flex items-center gap-2">
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22c55e" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">10K+</text></svg>
                            {locale === 'fr' ? 'Enfants aidés' : 'Children Empowered'}
                        </div>
                    </div>
                </div>
                {/* Content Side */}
                <div className="relative z-20 flex items-center justify-center bg-white/95 order-2 lg:order-1 shadow-lg lg:shadow-none">
                    <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left max-w-2xl">
                        <div className="mb-4 md:mb-6">
                            <span className="text-brand-darkblue font-bold text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase bg-brand-lightblue/10 px-3 py-1 rounded-full inline-block">
                                BAMPOREZE | {locale === 'fr' ? 'ONG' : ' NGO'}
                            </span>
                        </div>
                        <h1 className="text-brand-darkblue font-extrabold leading-tight mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                            {dictionary.pages.home.hero.title || (locale === 'fr' ? 'Bienvenue chez BAMPOREZE' : 'WELCOME TO BAMPOREZE')}
                        </h1>
                        <p className="text-brand-darkblue/80 mb-8 md:mb-12 leading-relaxed text-lg sm:text-xl md:text-2xl">
                            {dictionary.pages.home.hero.description || (locale === 'fr' ? 'Autonomiser les enfants vulnérables. Transformer les avenirs.' : 'Empowering Vulnerable Children. Transforming Futures.')}
                        </p>
                        {/* CTAs with icons */}
                        <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 sm:gap-6 mb-6">
                            <Link href="/contact">
                                <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-8 py-4 text-base md:text-lg transition-colors duration-150 min-w-[200px] shadow-md flex items-center gap-2">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Z" stroke="#fff" strokeWidth="2"/><path d="m3 7 8.293 6.293a1 1 0 0 0 1.414 0L21 7" stroke="#fff" strokeWidth="2"/></svg>
                                    {dictionary.pages.home.hero.ctas.contact_us}
                                </button>
                            </Link>
                            <button 
                                className="w-full sm:w-auto border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white font-semibold rounded-lg px-8 py-4 text-base md:text-lg flex items-center justify-center gap-3 transition-colors duration-150 min-w-[200px] shadow-md"
                                onClick={openVideo}
                                type="button"
                            >
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#22c55e" /><polygon points="10,8 16,12 10,16" fill="#fff"/></svg>
                                {dictionary.pages.home.hero.ctas.watch_yt}
                            </button>
                        </div>
                        {/* Testimonial/Impact Quote */}
                        <div className="mt-4 flex items-center gap-3 bg-brand-lightblue/10 rounded-lg px-4 py-3 shadow-sm">
                            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#22c55e"/><text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff">“</text></svg>
                            <span className="text-brand-darkblue text-base italic">{locale === 'fr' ? '“Grâce à Bamporeze, j’ai pu retourner à l’école et rêver d’un meilleur avenir.”' : '“Thanks to Bamporeze, I was able to return to school and dream of a better future.”'}</span>
                        </div>
                    </div>
                </div>
                {/* Scroll Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
                    <span className="text-brand-darkblue text-xs mb-1">{locale === 'fr' ? 'En savoir plus' : 'Learn more'}</span>
                    <svg className="animate-bounce" width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m0 0-7-7m7 7 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
            </div>
            {/* Video Modal: always render if videoOpen is true */}
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