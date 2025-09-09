"use client";

import { Button, Text } from "@repo/ui/units"
import Image from "next/image"
import { WithLocaleProp } from "../../components/units/navbar"
import { getDictionary } from "../../utils/dictionary"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Impact metrics data structure
interface ImpactMetric {
  value: string
  label: string
  emoji?: string
}

// Professional SVG icons for metrics
const getIcon = (type: string) => {
  switch (type) {
    case 'children':
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      );
    case 'education':
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'community':
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case 'impact':
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function AboutSectionTwo({ locale }: WithLocaleProp) {
    const currentPath = usePathname()
    const itTrue = currentPath.includes("about");
    const dictionary = getDictionary(locale) as any
    
    // Updated impact metrics based on user content
    const impactMetrics: ImpactMetric[] = [
        { value: "30,000+", label: "Children reached with education, protection, and psychosocial support", emoji: "children" },
        { value: "500+", label: "Women’s Self-Help Groups (SHGs) formed", emoji: "community" },
        { value: "Thousands", label: "Families supported with livelihood skills and income-generating activities", emoji: "impact" },
        { value: "Expanded", label: "HIV prevention & SRHR programs for youth", emoji: "education" },
        { value: "Reforestation", label: "Environmental protection initiatives", emoji: "impact" },
        { value: "29", label: "Years of Impact", emoji: "impact" },
    ];

    return (
        <section className="bg-[#003d1d] py-16 lg:py-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Title Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Our Impact
                    </h2>
                    <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                        “Our work is more than numbers, it’s the story of families lifted from poverty, children growing up safe, and communities shaping brighter futures.”
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Content and Metrics */}
                    <div className="space-y-8">
                        {/* Impact Metrics Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {impactMetrics.map((metric, index) => (
                                <div 
                                    key={index} 
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
                                >
                                    <div className="flex flex-col items-center space-y-3">
                                        {metric.emoji && (
                                            <div className="text-2xl md:text-3xl">
                                                {getIcon(metric.emoji)}
                                            </div>
                                        )}
                                        <div className="font-bold text-white text-3xl md:text-4xl leading-none">
                                            {metric.value}
                                        </div>
                                        <Text className="text-sm md:text-base font-medium text-white/90 text-center leading-tight">
                                            {metric.label}
                                        </Text>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Descriptive Text Content */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <Text variant="heading4" className="text-lg leading-relaxed text-white/90">
                                For over two decades, the Bamporeze Association has collaborated closely with communities, local leaders, and partners to transform lives across Rwanda. Our programs put families at the center, empowering them to overcome poverty, protect their children, and build brighter futures.<br/><br/>
                                <b>What We’ve Achieved Together</b><br/>
                                • 30,000+ children reached with education, protection, and psychosocial support.<br/>
                                • 500+ women’s Self-Help Groups (SHGs) formed, strengthening economic independence and advocacy.<br/>
                                • Thousands of families supported with livelihood skills and income-generating activities.<br/>
                                • Expanded HIV prevention & SRHR programs, equipping young people with knowledge and access to health services.<br/>
                                • Reforestation & environmental protection initiatives, promoting eco-friendly practices in vulnerable communities.<br/><br/>
                                <b>Beyond Numbers</b><br/>
                                Our impact is not just in statistics, it’s in the resilience of families who can now provide for themselves, in children who grow up safe and protected, and in communities that stand stronger together.
                            </Text>
                        </div>

                        {/* Call to Action */}
                        {!(itTrue) && (
                            <div className="pt-4">
                                <Link href={"/about"}>
                                    <Button 
                                        variant="secondary" 
                                        className="w-full md:w-fit flex items-center justify-center bg-white text-[#003d1d] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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

                    {/* Right Side - Image */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <Image 
                                src="/images/about_pic_2.jpg" 
                                width={600} 
                                height={600} 
                                loading="lazy" 
                                alt="Our impact descriptive image" 
                                className="w-full h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        
                        {/* Floating achievement badge */}
                        <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                            <div className="text-center">
                                <div className="font-bold text-green-600 text-2xl mb-2">
                                    ✅ 95%
                                </div>
                                <Text className="text-sm font-medium text-gray-600">
                                    {dictionary.pages.home.about_section_two.metrics?.success_rate || "Success Rate"}
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}