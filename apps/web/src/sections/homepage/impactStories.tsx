"use client";

import React from "react";
import Image from "next/image";
import { Button, Text } from "@repo/ui/units";
import WebSection from "../../components/layouts/websection";
import SectionTitle from "../../components/units/sectionTitle";
import { getDictionary } from "../../utils/dictionary";
import { WithLocaleProp } from "../../components/units/navbar";
import Link from "next/link";

interface ImpactStory {
    id: number;
    name: string;
    age: number;
    story: string;
    image: string;
    program: string;
    location: string;
    quote: string;
}

export default function ImpactStories({ locale }: WithLocaleProp) {
    const dictionary = getDictionary(locale) as any;
    
    const impactStories: ImpactStory[] = [
        {
            id: 1,
            name: "Ishimwe",
            age: 16,
            story: "At just 16, Ishimwe faced challenges no young girl should have to bear. After giving birth as a teenager, she dropped out of school and endured rejection and conflict at home. With no income and few opportunities, her dreams felt out of reach, and her community expected little of her beyond motherhood. When Bamporeze Association introduced community-based skills training, Ishimwe chose to join a carpentry program, an activity traditionally dominated by men. At first, many doubted her choice, but Ishimwe persevered. She learned how to measure, cut, and build furniture with confidence and determination. Today, Ishimwe earns a steady income from carpentry, supporting both herself and her child. More importantly, she has become a role model for other girls in her community. By stepping into a trade once reserved for men, she is breaking stereotypes and proving that young women can thrive in any field when given the chance.",
            image: "/images/child-1.jpg",
            program: "Carpentry Skills Training",
            location: "Rwanda",
            quote: "I never thought I could build something with my own hands and sell it. Now I can provide for my child and inspire other girls not to give up."
        },
        {
            id: 2,
            name: "Tuzamurane Self-Help Group",
            age: 0,
            story: "In 2019, twenty women from Rulindo District came together to form the Tuzamurane Self-Help Group. They were among the most vulnerable in their community, struggling daily to provide for their families. Access to financial services was out of reach, their voices were rarely heard, and the cycle of poverty weighed heavily on their households. Through the Self-Help Group Approach (SHGA) supported by Bamporeze, these women began a journey of transformation. They learned the value of saving and financial literacy, gaining the confidence to set aside small amounts each week. With time, they were able to access small loans from within the group, funds that allowed them to start businesses and income-generating activities that no bank would have offered them. But Tuzamurane became more than a financial group. It grew into a space of social and emotional empowerment. The women supported one another, built self-esteem, and discovered the power of speaking up. Today, members confidently share their opinions in public forums and are increasingly involved in local decision-making spaces, breaking barriers that once kept them silent. The impact reaches beyond income. With stronger finances, the women are now providing for their families: Their children are enjoying their rights, attending school, and living healthier lives. Families maintain kitchen gardens and prepare balanced meals, improving nutrition. Parents practice positive parenting and ensure household hygiene. All members now contribute to community-based health insurance, ensuring access to healthcare.",
            image: "/images/child-2.jpg",
            program: "Self-Help Group Approach",
            location: "Rulindo District, Rwanda",
            quote: "We learned to start small and dream big. Today we are not only feeding our children, we are shaping their future."
        }
    ];

    return (
        <WebSection 
            about="Impact Stories" 
            className="py-20 bg-gradient-to-b from-white to-gray-50"
        >
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <SectionTitle
                        direction="vertical"
                        title={dictionary.pages.home.impact_stories?.title || (locale === 'fr' ? "Histoires d'Impact" : "Impact Stories")}
                        subtitle={dictionary.pages.home.impact_stories?.subtitle || (locale === 'fr' ? "Découvrez comment votre soutien transforme des vies" : "See how your support transforms lives")}
                        suptitle={dictionary.pages.home.impact_stories?.suptitle || (locale === 'fr' ? "TÉMOIGNAGES" : "TESTIMONIALS")}
                    />
                    <div className="w-20 h-1 bg-green-600 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Stories Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {impactStories.map((story, index) => (
                        <div 
                            key={story.id} 
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Story Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={story.image}
                                    alt={story.name}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                
                                {/* Program Badge */}
                                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {story.program}
                                </div>
                                
                                {/* Age Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {story.age} {locale === 'fr' ? 'ans' : 'years'}
                                </div>
                            </div>

                            {/* Story Content */}
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                                    <p className="text-gray-600 text-sm">{story.location}</p>
                                </div>

                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    {story.story}
                                </p>

                                {/* Quote */}
                                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg mb-4">
                                    <p className="text-gray-800 italic text-sm">
                                        "{story.quote}"
                                    </p>
                                </div>

                                {/* Progress Indicator */}
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <span>{locale === 'fr' ? 'Progrès' : 'Progress'}</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-600 rounded-full" style={{ width: '85%' }}></div>
                                        </div>
                                        <span className="font-medium">85%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {locale === 'fr' ? 'Vous pouvez faire la différence' : 'You can make a difference'}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {locale === 'fr' 
                                ? "Chaque don, peu importe sa taille, aide un enfant de plus à réaliser ses rêves."
                                : "Every donation, no matter the size, helps another child achieve their dreams."
                            }
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/donate">
                                <Button 
                                    variant="primary" 
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                                >
                                    {locale === 'fr' ? 'Faire un don maintenant' : 'Donate Now'}
                                </Button>
                            </Link>
                            <Link href="/stories">
                                <Button 
                                    variant="secondary" 
                                    className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                                >
                                    {locale === 'fr' ? 'Voir plus d\'histoires' : 'See More Stories'}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </WebSection>
    );
}
