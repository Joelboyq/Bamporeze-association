"use client";

import React, { useState } from "react";
import { Button, Text } from "@repo/ui/units";
import WebSection from "../../components/layouts/websection";
import { getDictionary } from "../../utils/dictionary";
import { WithLocaleProp } from "../../components/units/navbar";
import Link from "next/link";

interface DonationOption {
    amount: number;
    impact: string;
    description: string;
    popular?: boolean;
}

export default function DonationCTA({ locale }: WithLocaleProp) {
    const dictionary = getDictionary(locale) as any;
    const [selectedAmount, setSelectedAmount] = useState<number>(25);
    
    const donationOptions: DonationOption[] = [
        {
            amount: 15,
            impact: locale === 'fr' ? '1 mois de fournitures scolaires' : '1 month of school supplies',
            description: locale === 'fr' ? 'Crayons, cahiers, uniformes' : 'Pencils, notebooks, uniforms'
        },
        {
            amount: 25,
            impact: locale === 'fr' ? '1 mois de repas scolaires' : '1 month of school meals',
            description: locale === 'fr' ? 'Nourriture nutritive quotidienne' : 'Daily nutritious meals',
            popular: true
        },
        {
            amount: 50,
            impact: locale === 'fr' ? '3 mois d\'éducation' : '3 months of education',
            description: locale === 'fr' ? 'Frais de scolarité et matériel' : 'Tuition fees and materials'
        },
        {
            amount: 100,
            impact: locale === 'fr' ? 'Soins de santé annuels' : 'Annual healthcare',
            description: locale === 'fr' ? 'Vaccinations et contrôles médicaux' : 'Vaccinations and medical checkups'
        }
    ];

    const trustIndicators = [
        {
            icon: "🔒",
            text: locale === 'fr' ? 'Paiement sécurisé SSL' : 'SSL Secure Payment'
        },
        {
            icon: "📊",
            text: locale === 'fr' ? 'Rapports financiers publics' : 'Public Financial Reports'
        },
        {
            icon: "✅",
            text: locale === 'fr' ? 'ONG certifiée' : 'Certified NGO'
        },
        {
            icon: "🌍",
            text: locale === 'fr' ? 'Impact vérifié' : 'Verified Impact'
        }
    ];

    return (
        <WebSection 
            about="Donation Call to Action" 
            className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {locale === 'fr' ? 'Faites la différence aujourd\'hui' : 'Make a difference today'}
                    </h2>
                    <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                        {locale === 'fr' 
                            ? "Votre don, peu importe sa taille, aide directement les enfants vulnérables du Rwanda à accéder à l'éducation, aux soins de santé et à un avenir meilleur."
                            : "Your donation, no matter the size, directly helps vulnerable children in Rwanda access education, healthcare, and a better future."
                        }
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Donation Options */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            {locale === 'fr' ? 'Choisissez votre impact' : 'Choose your impact'}
                        </h3>
                        
                        <div className="space-y-4 mb-8">
                            {donationOptions.map((option, index) => (
                                <div 
                                    key={index}
                                    className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                                        selectedAmount === option.amount 
                                            ? 'border-white bg-white/20' 
                                            : 'border-white/30 bg-white/5 hover:bg-white/10'
                                    }`}
                                    onClick={() => setSelectedAmount(option.amount)}
                                >
                                    {option.popular && (
                                        <div className="absolute -top-3 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                                            {locale === 'fr' ? 'POPULAIRE' : 'POPULAR'}
                                        </div>
                                    )}
                                    
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <div className="text-2xl font-bold text-white mb-1">
                                                €{option.amount}
                                            </div>
                                            <div className="text-green-100 font-medium mb-1">
                                                {option.impact}
                                            </div>
                                            <div className="text-green-200 text-sm">
                                                {option.description}
                                            </div>
                                        </div>
                                        
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                            selectedAmount === option.amount 
                                                ? 'border-white bg-white' 
                                                : 'border-white/50'
                                        }`}>
                                            {selectedAmount === option.amount && (
                                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Custom Amount */}
                        <div className="mb-8">
                            <label className="block text-white font-medium mb-3">
                                {locale === 'fr' ? 'Ou entrez un montant personnalisé' : 'Or enter a custom amount'}
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-lg">€</span>
                                <input
                                    type="number"
                                    min="1"
                                    className="w-full bg-white/20 border border-white/30 rounded-lg px-12 py-4 text-white text-lg font-semibold placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/30 transition-all duration-300"
                                    placeholder={locale === 'fr' ? 'Montant' : 'Amount'}
                                    value={selectedAmount}
                                    onChange={(e) => setSelectedAmount(Number(e.target.value) || 0)}
                                />
                            </div>
                        </div>

                        {/* Donate Button */}
                        <Link href={`/donate?amount=${selectedAmount}`}>
                            <Button 
                                variant="primary" 
                                className="w-full bg-white text-green-700 hover:bg-green-50 font-bold text-lg py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                {locale === 'fr' ? `Faire un don de €${selectedAmount}` : `Donate €${selectedAmount}`}
                            </Button>
                        </Link>
                    </div>

                    {/* Impact Visualization */}
                    <div className="space-y-8">
                        {/* Impact Stats */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                {locale === 'fr' ? 'Votre impact en chiffres' : 'Your impact in numbers'}
                            </h3>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-2">€{selectedAmount}</div>
                                    <div className="text-green-100 text-sm">
                                        {locale === 'fr' ? 'Votre don' : 'Your donation'}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white mb-2">
                                        {selectedAmount >= 25 ? '1' : '0.5'}
                                    </div>
                                    <div className="text-green-100 text-sm">
                                        {locale === 'fr' ? 'Enfant(s) aidé(s)' : 'Child(ren) helped'}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white mb-6">
                                {locale === 'fr' ? 'Pourquoi nous faire confiance' : 'Why trust us'}
                            </h3>
                            
                            <div className="grid grid-cols-2 gap-4">
                                {trustIndicators.map((indicator, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <span className="text-2xl">{indicator.icon}</span>
                                        <span className="text-green-100 text-sm font-medium">
                                            {indicator.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="text-center">
                            <p className="text-green-100 text-sm mb-4">
                                {locale === 'fr' 
                                    ? 'Tous les dons sont déductibles d\'impôts et 100% vont aux programmes'
                                    : 'All donations are tax-deductible and 100% goes to programs'
                                }
                            </p>
                            <div className="flex justify-center gap-6">
                                <Link href="/transparency" className="text-green-200 hover:text-white text-sm underline">
                                    {locale === 'fr' ? 'Voir la transparence' : 'View transparency'}
                                </Link>
                                <Link href="/impact" className="text-green-200 hover:text-white text-sm underline">
                                    {locale === 'fr' ? 'Voir l\'impact' : 'View impact'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebSection>
    );
}
