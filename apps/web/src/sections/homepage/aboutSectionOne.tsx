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
        <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* NGO Badge */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full"></div>
                        Women-led Nonprofit · Since 1996
                    </div>
                </div>

                {/* Main Title Section */}
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        Who we are
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-green-600 mx-auto mb-4 sm:mb-6"></div>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                        At Bamporeze, we believe every child deserves protection, every woman deserves empowerment, and every family deserves hope. Together with communities, we turn challenges into opportunities for a brighter, sustainable future.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    {/* Image with NGO-style overlay */}
                    <div className="order-2 lg:order-1 relative mx-auto lg:mx-0 w-full max-w-2xl lg:max-w-none">
                        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full">
                            <Image 
                                src={'/images/about_pic_1.jpg'} 
                                width={800}
                                height={800} 
                                loading="lazy" 
                                alt="Bamporeze Association helping vulnerable children" 
                                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        {/* Impact badge on image */}
                        <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                            <div className="text-xl sm:text-2xl font-bold">29</div>
                            <div className="text-xs sm:text-sm">Years of Impact</div>
                        </div>
                    </div>

                    {/* Text Content with NGO styling */}
                    <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
                        <div className="space-y-4 sm:space-y-6">
                            <Text variant="heading4" className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our story</div>
                                <div className="space-y-4">
                                    <p>Bamporeze was founded in 1996 with a simple but powerful message in mind: Building hope through families, shaping futures through children. Born in the aftermath of the 1994 Genocide against the Tutsi, Rwanda was in a deep humanitarian crisis. Families had been torn apart, children were left vulnerable, and communities struggled to rebuild.</p>
                                    
                                    <p>In response, Bamporeze began its journey by supporting children, youth, and vulnerable families with urgent humanitarian aid, providing food, clothing, shelter, and psychosocial support. At the same time, the organization focused on empowering families to restore their dignity and independence by building their capacity to start income-generating activities.</p>
                                    
                                    <p>As HIV and AIDS continued to devastate communities, Bamporeze expanded its mission to include HIV prevention and Sexual and Reproductive Health and Rights (SRHR), ensuring that young people and families had the knowledge and resources to live healthier lives.</p>
                                    
                                    <p>Today, Bamporeze has evolved into a dynamic organization committed to alleviating poverty, building resilience, and protecting the rights of women and children. Our programs now include education (basic education and early childhood development), child protection, community development, health, and environmental protection, which are all designed to strengthen families and communities.</p>
                                    
                                    <p>Over the years, our work has been made possible through the support of global and national partners, including UNICEF, UNHCR, the Global Fund, Kindernothilfe (KNH), Plan International, Help a Child, AHF, Sanofi Foundation, Cornerstone Trust, and Firelight Foundation. Together, we have reached thousands of children, women, and families across Rwanda, turning a story of loss into a story of hope and resilience.</p>
                                </div>
                            </Text>
                        </div>

                        {/* Mission and Vision */}
                        <div className="bg-green-50 rounded-lg p-4 sm:p-6 shadow-sm">
                            <div className="space-y-4 sm:space-y-6">
                                <div>
                                    <div className="text-lg sm:text-xl font-bold text-green-800 mb-2">Mission</div>
                                    <div className="text-sm sm:text-base text-gray-700">To promote child protection, gender equality, and sustainable development through community-driven approaches and advocacy.</div>
                                </div>
                                <div>
                                    <div className="text-lg sm:text-xl font-bold text-green-800 mb-2">Vision</div>
                                    <div className="text-sm sm:text-base text-gray-700">We envision an empowered community where every child thrives and lives a life of dignity.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
