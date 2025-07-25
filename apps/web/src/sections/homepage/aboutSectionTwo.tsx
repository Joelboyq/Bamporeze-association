"use client";

import { Button, Text } from "@repo/ui/units"
import Image from "next/image"
import WebSection from "../../components/layouts/websection"
import { WithLocaleProp } from "../../components/units/navbar"
import SectionTitle from "../../components/units/sectionTitle"
import { getDictionary } from "../../utils/dictionary"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Impact metrics data structure
interface ImpactMetric {
  value: string
  label: string
  emoji?: string
}



export default function AboutSectionTwo({ locale }: WithLocaleProp) {

    const currentPath = usePathname()

    const itTrue = currentPath.includes("about");

    const dictionary = getDictionary(locale) as any
    
    // Define your key impact metrics here - customize these values
    const impactMetrics: ImpactMetric[] = [
        {
            value: "1,200+",
            label: dictionary.pages.home.about_section_two.metrics?.children_supported || "Children Supported",
            emoji: "👶"
        },
        {
            value: "85%",
            label: dictionary.pages.home.about_section_two.metrics?.school_retention || "School Retention Rate",
            emoji: "📚"
        },
        {
            value: "50+",
            label: dictionary.pages.home.about_section_two.metrics?.communities || "Communities Reached",
            emoji: "🏘️"
        },
        {
            value: "12",
            label: dictionary.pages.home.about_section_two.metrics?.years_active || "Years of Impact",
            emoji: "⭐"
        }
    ]

    return (
        <WebSection 
            about="Our impact" 
            className="text-[30px] flex items-start justify-between justify-items-end msm:flex-col-reverse md:flex-row md:gap-8 msm:gap-6 py-16"
        >
            <div className="flex flex-col gap-8 md:w-7/12">
                <SectionTitle
                    direction="horizontal"
                    title={dictionary.pages.home.about_section_two.title}
                    suptitle={dictionary.pages.home.about_section_two.suptitle}
                    subtitle={dictionary.pages.home.about_section_two.subtitle} 
                />

                {/* Impact Metrics Grid - Prominent Numbers */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {impactMetrics.map((metric, index) => (
                        <div 
                            key={index} 
                            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100 text-center hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="flex flex-col items-center space-y-2">
                                {metric.emoji && (
                                    <span className="text-xl md:text-2xl">{metric.emoji}</span>
                                )}
                                <div 
                                    className="font-bold text-blue-600 leading-none"
                                    style={{ fontSize: 'max(24px, 1.75rem)' }} // Minimum 24px as requested
                                >
                                    {metric.value}
                                </div>
                                <Text 
                                    className="text-xs md:text-sm font-medium text-gray-700 text-center leading-tight"
                                    style={{ fontSize: 'max(12px, 0.875rem)' }}
                                >
                                    {metric.label}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>
                {itTrue && (
                     <Text variant="heading4" className="text-lg leading-relaxed">
                     {dictionary.pages.home.about_section_two.content}
                 </Text>
                ) }

                {/* Content Text */}
               

                {/* Call to Action */}
                {!(itTrue) && (
                <Link href={"/about"}>
                
                    <Button 
                        variant="secondary" 
                        className="md:w-fit msm:w-full flex items-center justify-center mt-4"
                    >
                        <div className="flex items-center gap-2">
                            {dictionary.common.ctas.read_more}
                        </div>
                    </Button>
                </Link>
                )}
            </div>

            <div className="md:w-5/12 relative">
                <Image 
                    src="/images/about_pic_2.jpg" 
                    width={600} 
                    height={600} 
                    loading="lazy" 
                    alt="Our impact descriptive image" 
                    className="rounded-lg w-full h-auto shadow-md"
                />
                
                {/* Optional: Floating achievement badge */}
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-xl border border-gray-100 hidden md:block">
                    <div className="text-center">
                        <div 
                            className="font-bold text-green-600 mb-1"
                            style={{ fontSize: 'max(20px, 1.25rem)' }}
                        >
                            ✅ 95%
                        </div>
                        <Text className="text-xs font-medium text-gray-600">
                            {dictionary.pages.home.about_section_two.metrics?.success_rate || "Success Rate"}
                        </Text>
                    </div>
                </div>
            </div>
        </WebSection>
    )
}