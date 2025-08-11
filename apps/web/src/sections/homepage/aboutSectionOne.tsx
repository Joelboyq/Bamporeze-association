"use client";

import React from "react"
import { Button, Text } from "@repo/ui/units"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { Locale } from "../../../i18n.config"
import { getDictionary } from "../../utils/dictionary"
import Link from "next/link"

export default function useAboutSectionOne({ expanded, locale }: { expanded: boolean, locale: Locale }) {
    const dictionary = getDictionary(locale) as any
    const currentPath = usePathname()
    
    const itTrue = currentPath.includes("about");
    
    return (
        <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* NGO Badge */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {locale === 'fr' ? 'ONG Reconnue au Rwanda' : 'Registered NGO in Rwanda'}
                    </div>
                </div>

                {/* Main Title Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        {dictionary.pages.home.about_section_one.title}
                    </h2>
                    <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {dictionary.pages.home.about_section_one.subtitle}
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image with NGO-style overlay */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full">
                            <Image 
                                src={'/images/about_pic_1.jpg'} 
                                width={600}
                                height={600} 
                                loading="lazy" 
                                alt="Bamporeze Association helping vulnerable children" 
                                className="w-full h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        {/* Impact badge on image */}
                        <div className="absolute -bottom-4 -right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
                            <div className="text-2xl font-bold">15+</div>
                            <div className="text-sm">Years of Impact</div>
                        </div>
                    </div>
                    
                    {/* Text Content with NGO styling */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="space-y-6">
                            <Text variant="heading4" className="text-lg md:text-xl leading-relaxed text-gray-700">
                                {itTrue ? dictionary.pages.home.about_section_one.content : dictionary.pages.home.about_section_one.content.slice(0, 400) + "..."}
                            </Text>
                        </div>
                        
                        {/* Impact highlights */}
                        <div className="grid grid-cols-2 gap-6 py-6">
                            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="text-2xl font-bold text-green-600">10,000+</div>
                                <div className="text-sm text-gray-600">
                                    {locale === 'fr' ? 'Enfants Aidés' : 'Children Helped'}
                                </div>
                            </div>
                            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="text-2xl font-bold text-blue-600">95%</div>
                                <div className="text-sm text-gray-600">
                                    {locale === 'fr' ? 'Taux de Réussite' : 'Success Rate'}
                                </div>
                            </div>
                        </div>
                        
                        {!(itTrue) && (
                            <div className="pt-4">
                                <Link href={"/about"}>
                                    <Button 
                                        variant="secondary" 
                                        className="w-full md:w-fit flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3">
                                            {dictionary.common.ctas.read_more}
                                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
