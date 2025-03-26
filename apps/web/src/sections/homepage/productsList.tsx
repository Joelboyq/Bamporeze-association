import Image from "next/image";
import WebSection from "../../components/layouts/websection";
import { WithLocaleProp } from "../../components/units/navbar";
import SectionTitle from "../../components/units/sectionTitle";
import { getDictionary } from "../../utils/dictionary";

export default function ProductsList({ locale }: WithLocaleProp) {
    const dictionary = getDictionary(locale);
    
    // Product data for better maintainability
    const products = [
        { 
            name: "Gold", 
            image: "/images/gold.jpg", 
            alt: "Gold mineral sample - one of our key mining products" 
        },
        { 
            name: "Cassiterite", 
            image: "/images/casittererite.jpg", 
            alt: "Cassiterite mineral sample - a tin oxide mineral" 
        },
        { 
            name: "Sulfur", 
            image: "/images/sulfur.jpg", 
            alt: "Sulfur mineral sample - used in various industrial applications" 
        },
        { 
            name: "Tungsten", 
            image: "/images/tungsten.jpg", 
            alt: "Tungsten mineral sample - known for its high melting point" 
        }
    ];
    
    return (
        <WebSection about="Our products" className="bg-white py-14 flex flex-col gap-16">
            <SectionTitle
                direction="horizontal"
                title={dictionary.pages.home.products.title}
                subtitle={dictionary.pages.home.products.subtitle}
                suptitle={dictionary.pages.home.products.suptitle} />
                
            <div className="grid md:grid-cols-4 msm:grid-cols-2 gap-4">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Image 
                            loading="lazy" 
                            src={product.image} 
                            width={500} 
                            height={500} 
                            alt={product.alt} 
                            className="h-full w-full rounded-xl shadowed object-cover" 
                        />
                        <p className="mt-2 text-center font-medium text-gray-900">{product.name}</p>
                    </div>
                ))}
            </div>
        </WebSection>
    );
}