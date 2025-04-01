import Image from "next/image";
import WebSection from "../../components/layouts/websection";
import { WithLocaleProp } from "../../components/units/navbar";
import SectionTitle from "../../components/units/sectionTitle";
import { getDictionary } from "../../utils/dictionary";

// Define a proper type for program items
interface ProgramItem {
    title: string;
    description: string;
    image: string;
}

export default function ProductsList({ locale }: WithLocaleProp) {
    const dictionary = getDictionary(locale) as any;
    
    // Get program items from dictionary for proper localization
    const programItems: ProgramItem[] = dictionary.pages.home.products.items || [
        { 
            title: "Education Support",
            description: "Providing scholarships and educational resources",
            image: "/images/gold.jpg"
        },
        { 
            title: "Healthcare Access",
            description: "Improving health services for rural communities",
            image: "/images/sulfur.jpg"
        },
        { 
            title: "Economic Empowerment",
            description: "Training and support for small businesses",
            image: "/images/tungsten.jpg"
        },
        { 
            title: "Community Infrastructure",
            description: "Building essential community facilities",
            image: "/images/cassiterite.jpg"
        }
    ];
    
    return (
        <WebSection about="Our programs" className="py-24 flex flex-col gap-16 overflow-hidden bg-gradient-to-b from-white to-white">
            <div className="flex flex-col items-center">
                <SectionTitle
                    direction="vertical"
                    title={dictionary.pages.home.products.title}
                    subtitle={dictionary.pages.home.products.subtitle}
                    suptitle={dictionary.pages.home.products.suptitle} 
                />
                <div className="w-20 h-1 bg-brand-darkblue mt-6 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 msm:grid-cols-1 gap-12">
                {programItems.map((program, index) => (
                    <div key={index} className="group relative h-[400px] overflow-hidden rounded-xl shadow-lg">
                        {/* Program image */}
                        <Image 
                            src={program.image} 
                            fill
                            style={{ objectFit: 'cover' }}
                            alt={program.title} 
                            className="transition-all duration-700 group-hover:scale-110"
                        />
                        
                        {/* Gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:via-black/60 transition-all duration-500"></div>
                        
                        {/* Content that's always visible */}
                        <div className="absolute bottom-0 w-full p-8 transform transition-all duration-500 group-hover:translate-y-[-60px]">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-lightblue transition-colors duration-300">{program.title}</h3>
                            
                            {/* Content that expands on hover */}
                            <div className="overflow-hidden">
                                <p className="text-white text-base leading-relaxed max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    {program.description}
                                </p>
                                
                                {/* Additional details that appear on hover */}
                                <div className="pt-4 mt-4 border-t border-white/20 flex items-center justify-between max-h-0 opacity-0 group-hover:max-h-[50px] group-hover:opacity-100 transition-all duration-500 delay-100 ease-in-out">
                                    <span className="text-white text-sm">
                                        {index === 0 && "Educational initiatives"}
                                        {index === 1 && "Healthcare services"}
                                        {index === 2 && "Economic development"}
                                        {index === 3 && "Infrastructure projects"}
                                    </span>
                                    
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                                        <span className="text-white text-sm">Active program</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Indicator that more content is available on hover */}
                            <div className="absolute bottom-6 right-8 opacity-70 group-hover:opacity-0 transition-opacity duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        
                        {/* Top right tag */}
                        <div className="absolute top-5 right-5 bg-brand-darkblue/70 backdrop-blur-sm text-white text-xs py-1.5 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                            {index % 2 === 0 ? 'Core Initiative' : 'Support Program'}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Featured program (larger) - Fixed to avoid cutting off heads */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl mt-8">
                <div className="w-full aspect-[16/9] md:aspect-[21/9] relative">
                    <Image 
                        src={programItems[0].image} 
                        fill
                        style={{ 
                            objectFit: 'cover',
                            objectPosition: 'center 33%' // Focus more on the upper part of the image where faces are
                        }}
                        alt="Featured Program" 
                        className="transition-all duration-700 hover:scale-105"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full md:w-1/2 p-6 md:p-10 text-white">
                        <span className="inline-block bg-brand-darkblue text-white text-sm py-1 px-4 rounded-full mb-4">
                            Featured Program
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">{programItems[0].title}</h2>
                        <p className="text-white text-base md:text-lg mb-6 md:mb-8 leading-relaxed">{programItems[0].description}</p>
                        
                        {/* Key points */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-brand-lightblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Life-changing impact for communities</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-brand-lightblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Sustainable long-term solutions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-brand-lightblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Community-driven development</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebSection>
    );
}