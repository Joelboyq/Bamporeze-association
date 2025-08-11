'use client'
import Image from "next/image";
import { WithLocaleProp } from "../../components/units/navbar";
import { getDictionary } from "../../utils/dictionary";
import { useState } from "react";
import Link from "next/link";

// Define a proper type for program items
interface ProgramItem {
    title: string;
    description: string;
    image: string;
    category?: string;
    status?: string;
}

export default function ProductsList({ locale }: WithLocaleProp) {
    const dictionary = getDictionary(locale) as any;

    
    // Get program items from dictionary for proper localization
    const programItems: ProgramItem[] = dictionary.pages.home.products.items || [
        { 
            title: "Education Support Program",
            description: "Providing scholarships, school supplies, and educational resources to vulnerable children. Our comprehensive approach ensures every child has access to quality education.",
            image: "/images/gold.jpg",
            category: "Education",
            status: "Active"
        },
        { 
            title: "Healthcare Access Initiative",
            description: "Improving health services for rural communities through medical camps, health education, and infrastructure development.",
            image: "/images/sulfur.jpg",
            category: "Healthcare",
            status: "Active"
        },
        { 
            title: "Economic Empowerment Program",
            description: "Training and support for small businesses, vocational skills development, and microfinance opportunities for sustainable income generation.",
            image: "/images/tungsten.jpg",
            category: "Economic Development",
            status: "Active"
        },
        { 
            title: "Community Infrastructure Program",
            description: "Building essential community facilities, improving access to clean water, and developing sustainable infrastructure for long-term community development.",
            image: "/images/cassiterite.jpg",
            category: "Infrastructure",
            status: "Active"
        }
    ];
    

    
    return (
        <section className="bg-[#71c993] relative overflow-hidden">
            <div className="w-full">
                {/* Professional Title Section */}
                <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        {/* NGO Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            Our Core Programs
                        </div>
                        
                        {/* Main Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Transforming Lives Through
                            <span className="block text-green-100">Comprehensive Programs</span>
                        </h2>
                        
                       
                        
                        {/* Impact Stats */}
                       
                    </div>
                </div>

                {/* Four Panel Layout - Full Width */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                    {programItems.map((program, index) => (
                        <div 
                            key={index} 
                            className="relative h-[400px] lg:h-[500px] overflow-hidden transition-all duration-700 group cursor-pointer"
                        >
                            {/* Big Hover Background Effect - Different colors for each card */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-95 transition-all duration-500 z-10 ${
                                index === 0 ? 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700' :
                                index === 1 ? 'bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700' :
                                index === 2 ? 'bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700' :
                                'bg-gradient-to-br from-green-600 via-green-500 to-green-700'
                            }`}></div>
                            {/* Program image */}
                            <Image 
                                src={program.image} 
                                fill
                                style={{ objectFit: 'cover' }}
                                alt={program.title} 
                                className="transition-all duration-700 group-hover:scale-110"
                            />
                            
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:opacity-0 transition-all duration-500"></div>
                            
                            {/* Content */}
                            <div className="absolute bottom-0 w-full p-8 transform transition-all duration-700 group-hover:translate-y-[-20px] z-20">
                                {/* Category Badge */}
                                <div className={`inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:bg-white ${
                                    index === 0 ? 'group-hover:text-blue-600' :
                                    index === 1 ? 'group-hover:text-purple-600' :
                                    index === 2 ? 'group-hover:text-orange-600' :
                                    'group-hover:text-green-600'
                                }`}>
                                    <div className={`w-2 h-2 bg-white rounded-full animate-pulse ${
                                        index === 0 ? 'group-hover:bg-blue-600' :
                                        index === 1 ? 'group-hover:bg-purple-600' :
                                        index === 2 ? 'group-hover:bg-orange-600' :
                                        'group-hover:bg-green-600'
                                    }`}></div>
                                    {program.category}
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight transform transition-all duration-500 group-hover:text-white group-hover:scale-105 group-hover:drop-shadow-lg">
                                    {program.title}
                                </h3>
                                
                                {/* Description */}
                                <div className="overflow-hidden">
                                    <p className="text-white/90 text-base leading-relaxed mb-6 transform transition-all duration-500 group-hover:text-white group-hover:translate-y-0 opacity-80 group-hover:opacity-100 group-hover:drop-shadow-md">
                                        {program.description}
                                    </p>
                                </div>
                                
                                {/* Status and CTA */}
                                <div className="flex items-center justify-between transform transition-all duration-500 group-hover:translate-y-0">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse group-hover:scale-150 group-hover:bg-white"></div>
                                        <span className="text-white/80 text-sm group-hover:text-white transition-colors group-hover:drop-shadow-sm">{program.status} Program</span>
                                    </div>
                                    
                                    <Link href={`/${locale}/programs/${index === 0 ? 'education' : index === 1 ? 'healthcare' : index === 2 ? 'economic' : 'infrastructure'}`}>
                                        <button className={`bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center gap-2 transform group-hover:scale-110 group-hover:shadow-xl ${
                                            index === 0 ? 'group-hover:bg-blue-600 group-hover:text-white' :
                                            index === 1 ? 'group-hover:bg-purple-600 group-hover:text-white' :
                                            index === 2 ? 'group-hover:bg-orange-600 group-hover:text-white' :
                                            'group-hover:bg-green-600 group-hover:text-white'
                                        }`}>
                                            Learn More!
                                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform group-hover:translate-x-1 transition-transform">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}