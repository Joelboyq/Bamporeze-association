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
        <WebSection about="Our programs" className="bg-white py-24 flex flex-col gap-20">
            <SectionTitle
                direction="horizontal"
                title={dictionary.pages.home.products.title}
                subtitle={dictionary.pages.home.products.subtitle}
                suptitle={dictionary.pages.home.products.suptitle} />
                
            <div className="grid md:grid-cols-4 msm:grid-cols-1 sm:grid-cols-2 gap-8">
                {programItems.map((program: ProgramItem, index: number) => (
                    <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        {/* Made card taller with custom aspect ratio */}
                        <div className="aspect-[4/5] relative">
                            <Image 
                                loading="lazy" 
                                src={program.image} 
                                width={600} 
                                height={750} 
                                alt={program.title} 
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                            
                            {/* Title container that transitions on hover */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 transition-all duration-300 group-hover:opacity-0">
                                <h3 className="text-white font-bold text-xl">{program.title}</h3>
                            </div>
                            
                            {/* Hover overlay with more details */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-5">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <span className="text-white text-xl">→</span>
                                </div>
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-bold text-2xl mb-3">{program.title}</h3>
                                    <p className="text-white/90 text-base leading-relaxed">{program.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </WebSection>
    );
}