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
            name: locale === 'fr' ? "Marie Uwimana" : "Marie Uwimana",
            age: 12,
            story: locale === 'fr' 
                ? "Marie a pu retourner à l'école grâce à notre programme de bourses d'études. Elle rêve de devenir médecin."
                : "Marie was able to return to school through our scholarship program. She dreams of becoming a doctor.",
            image: "/images/child-1.jpg",
            program: locale === 'fr' ? "Programme Éducatif" : "Education Program",
            location: locale === 'fr' ? "Kigali, Rwanda" : "Kigali, Rwanda",
            quote: locale === 'fr' 
                ? "Grâce à Bamporeze, je peux maintenant rêver d'un avenir meilleur."
                : "Thanks to Bamporeze, I can now dream of a better future."
        },
        {
            id: 2,
            name: locale === 'fr' ? "Jean Pierre Ndayisaba" : "Jean Pierre Ndayisaba",
            age: 15,
            story: locale === 'fr'
                ? "Jean Pierre a reçu une formation en informatique et travaille maintenant comme assistant technique."
                : "Jean Pierre received computer training and now works as a technical assistant.",
            image: "/images/child-2.jpg",
            program: locale === 'fr' ? "Formation Professionnelle" : "Vocational Training",
            location: locale === 'fr' ? "Butare, Rwanda" : "Butare, Rwanda",
            quote: locale === 'fr'
                ? "Bamporeze m'a donné les compétences pour subvenir aux besoins de ma famille."
                : "Bamporeze gave me the skills to support my family."
        },
        {
            id: 3,
            name: locale === 'fr' ? "Grace Mukamana" : "Grace Mukamana",
            age: 10,
            story: locale === 'fr'
                ? "Grace a accès à des soins de santé de qualité grâce à notre programme médical."
                : "Grace has access to quality healthcare through our medical program.",
            image: "/images/child-3.jpg",
            program: locale === 'fr' ? "Soins de Santé" : "Healthcare",
            location: locale === 'fr' ? "Gisenyi, Rwanda" : "Gisenyi, Rwanda",
            quote: locale === 'fr'
                ? "Je me sens en sécurité et en bonne santé grâce à Bamporeze."
                : "I feel safe and healthy thanks to Bamporeze."
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
