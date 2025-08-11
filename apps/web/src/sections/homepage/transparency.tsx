"use client";

import React from "react";
import { Button, Text } from "@repo/ui/units";
import WebSection from "../../components/layouts/websection";
import SectionTitle from "../../components/units/sectionTitle";
import { getDictionary } from "../../utils/dictionary";
import { WithLocaleProp } from "../../components/units/navbar";
import Link from "next/link";

interface FinancialMetric {
    category: string;
    percentage: number;
    amount: string;
    color: string;
}

interface ImpactMetric {
    value: string;
    label: string;
    description: string;
    icon: string;
}

export default function Transparency({ locale }: WithLocaleProp) {
    const dictionary = getDictionary(locale) as any;
    
    const financialMetrics: FinancialMetric[] = [
        {
            category: locale === 'fr' ? 'Programmes' : 'Programs',
            percentage: 75,
            amount: locale === 'fr' ? '75%' : '75%',
            color: '#22c55e'
        },
        {
            category: locale === 'fr' ? 'Administration' : 'Administration',
            percentage: 15,
            amount: locale === 'fr' ? '15%' : '15%',
            color: '#3b82f6'
        },
        {
            category: locale === 'fr' ? 'Collecte de fonds' : 'Fundraising',
            percentage: 10,
            amount: locale === 'fr' ? '10%' : '10%',
            color: '#f59e0b'
        }
    ];

    const impactMetrics: ImpactMetric[] = [
        {
            value: "10,000+",
            label: locale === 'fr' ? 'Enfants aidés' : 'Children Helped',
            description: locale === 'fr' ? 'Depuis notre création' : 'Since our founding',
            icon: "👶"
        },
        {
            value: "95%",
            label: locale === 'fr' ? 'Taux de réussite' : 'Success Rate',
            description: locale === 'fr' ? 'Des programmes éducatifs' : 'Of education programs',
            icon: "📈"
        },
        {
            value: "€2.5M",
            label: locale === 'fr' ? 'Fonds levés' : 'Funds Raised',
            description: locale === 'fr' ? 'En 2023' : 'In 2023',
            icon: "💰"
        },
        {
            value: "15",
            label: locale === 'fr' ? 'Années d\'impact' : 'Years of Impact',
            description: locale === 'fr' ? 'D\'expérience' : 'Of experience',
            icon: "⭐"
        }
    ];

    return (
        <WebSection 
            about="Transparency & Accountability" 
            className="py-20 bg-white"
        >
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <SectionTitle
                        direction="vertical"
                        title={dictionary.pages.home.transparency?.title || (locale === 'fr' ? "Transparence et Responsabilité" : "Transparency & Accountability")}
                        subtitle={dictionary.pages.home.transparency?.subtitle || (locale === 'fr' ? "Nous croyons en la transparence totale dans l'utilisation de vos dons" : "We believe in complete transparency in how your donations are used")}
                        suptitle={dictionary.pages.home.transparency?.suptitle || (locale === 'fr' ? "TRANSPARENCE" : "TRANSPARENCY")}
                    />
                    <div className="w-20 h-1 bg-green-600 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Financial Breakdown */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            {locale === 'fr' ? 'Répartition des Fonds' : 'Fund Allocation'}
                        </h3>
                        
                        <div className="space-y-6">
                            {financialMetrics.map((metric, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div 
                                            className="w-4 h-4 rounded-full"
                                            style={{ backgroundColor: metric.color }}
                                        ></div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{metric.category}</p>
                                            <p className="text-sm text-gray-600">
                                                {locale === 'fr' ? 'de nos dépenses totales' : 'of our total expenses'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-xl text-gray-900">{metric.amount}</p>
                                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full rounded-full transition-all duration-1000"
                                                style={{ 
                                                    width: `${metric.percentage}%`,
                                                    backgroundColor: metric.color
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                            <div className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                                <p className="text-green-800 font-medium">
                                    {locale === 'fr' 
                                        ? 'Audit externe annuel effectué'
                                        : 'Annual external audit completed'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Impact Metrics */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            {locale === 'fr' ? 'Notre Impact' : 'Our Impact'}
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-6">
                            {impactMetrics.map((metric, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl mb-2">{metric.icon}</div>
                                    <div className="text-2xl font-bold text-gray-900 mb-1">
                                        {metric.value}
                                    </div>
                                    <div className="text-sm font-medium text-gray-700 mb-1">
                                        {metric.label}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {metric.description}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24">
                                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                                <p className="text-blue-800 font-medium">
                                    {locale === 'fr' 
                                        ? 'Rapports d\'impact trimestriels disponibles'
                                        : 'Quarterly impact reports available'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Governance & Certifications */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white mb-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-2">
                                {locale === 'fr' ? 'Certification' : 'Certification'}
                            </h4>
                            <p className="text-green-100">
                                {locale === 'fr' 
                                    ? 'ONG officiellement enregistrée au Rwanda'
                                    : 'Officially registered NGO in Rwanda'
                                }
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-2">
                                {locale === 'fr' ? 'Gouvernance' : 'Governance'}
                            </h4>
                            <p className="text-green-100">
                                {locale === 'fr' 
                                    ? 'Conseil d\'administration indépendant'
                                    : 'Independent board of directors'
                                }
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
                                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-2">
                                {locale === 'fr' ? 'Rapports' : 'Reports'}
                            </h4>
                            <p className="text-green-100">
                                {locale === 'fr' 
                                    ? 'Rapports financiers annuels publics'
                                    : 'Public annual financial reports'
                                }
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {locale === 'fr' ? 'Restez informé de notre impact' : 'Stay informed about our impact'}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {locale === 'fr' 
                                ? "Téléchargez nos rapports annuels et suivez nos progrès en temps réel."
                                : "Download our annual reports and track our progress in real-time."
                            }
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/reports">
                                <Button 
                                    variant="primary" 
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                                >
                                    {locale === 'fr' ? 'Télécharger les rapports' : 'Download Reports'}
                                </Button>
                            </Link>
                            <Link href="/financials">
                                <Button 
                                    variant="secondary" 
                                    className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                                >
                                    {locale === 'fr' ? 'Voir les finances' : 'View Finances'}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </WebSection>
    );
}
