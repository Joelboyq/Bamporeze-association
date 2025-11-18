"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "../../../i18n.config";

export default function AboutSectionOne({ locale }: { locale?: Locale }) {
    const currentPath = usePathname();
    const isAboutPage = currentPath.includes("about");
    const currentLocale = locale || (currentPath.split('/')[1] as Locale) || 'en';
    
    return (
        <>
            <style jsx>{`
                .about-section {
                    padding: 2.5rem 0;
                    background: linear-gradient(to bottom right, #f9fafb, #ffffff);
                    overflow: hidden;
                }

                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                .ngo-badge-wrapper {
                    text-align: center;
                    margin-bottom: 1.5rem;
                }

                .ngo-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background-color: #d1fae5;
                    color: #065f46;
                    padding: 0.375rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 500;
                }

                .ngo-badge-dot {
                    width: 0.375rem;
                    height: 0.375rem;
                    background-color: #10b981;
                    border-radius: 9999px;
                }

                .title-section {
                    text-center;
                    margin-bottom: 2.5rem;
                }

                .main-title {
                    font-size: 1.875rem;
                    font-weight: bold;
                    color: #111827;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                }

                .title-underline {
                    width: 4rem;
                    height: 0.25rem;
                    background-color: #16a34a;
                    margin: 0 auto 1rem;
                }

                .subtitle {
                    font-size: 1.125rem;
                    color: #4b5563;
                    max-width: 56rem;
                    margin: 0 auto;
                    line-height: 1.6;
                    padding: 0 1rem;
                }

                .content-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    align-items: center;
                }

                .image-wrapper {
                    order: 2;
                    position: relative;
                    margin: 0 auto;
                    width: 100%;
                    max-width: 42rem;
                }

                .image-container {
                    position: relative;
                    overflow: hidden;
                    border-radius: 0.75rem;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    width: 100%;
                }

                .main-image {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                    transition: transform 0.7s;
                }

                .main-image:hover {
                    transform: scale(1.05);
                }

                .image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
                }

                .impact-badge {
                    position: absolute;
                    bottom: -0.75rem;
                    right: -0.75rem;
                    background-color: #16a34a;
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s;
                }

                .impact-badge:hover {
                    transform: scale(1.05);
                }

                .impact-number {
                    font-size: 1.25rem;
                    font-weight: bold;
                }

                .impact-text {
                    font-size: 0.75rem;
                }

                .text-content {
                    order: 1;
                }

                .story-section {
                    margin-bottom: 1.5rem;
                }

                .story-title {
                    font-size: 1.25rem;
                    font-weight: bold;
                    color: #111827;
                    margin-bottom: 1rem;
                }

                .story-text {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: #374151;
                }

                .story-text p {
                    margin-bottom: 1rem;
                }

                .mission-vision-box {
                    background-color: #f0fdf4;
                    border-radius: 0.5rem;
                    padding: 1rem;
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                }

                .mission-vision-item {
                    margin-bottom: 1.5rem;
                }

                .mission-vision-item:last-child {
                    margin-bottom: 0;
                }

                .mission-vision-title {
                    font-size: 1.125rem;
                    font-weight: bold;
                    color: #065f46;
                    margin-bottom: 0.5rem;
                }

                .mission-vision-text {
                    font-size: 0.875rem;
                    color: #374151;
                }

                .read-more-wrapper {
                    margin-top: 2rem;
                    padding-top: 1.5rem;
                    display: flex;
                    justify-content: flex-start;
                }

                .read-more-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
                    color: white;
                    font-weight: 700;
                    font-size: 1.0625rem;
                    text-decoration: none;
                    padding: 1rem 2rem;
                    border-radius: 0.75rem;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 10px 20px -5px rgba(22, 163, 74, 0.4), 0 4px 6px -2px rgba(22, 163, 74, 0.2);
                    position: relative;
                    overflow: hidden;
                    border: 2px solid rgba(255, 255, 255, 0.2);
                }

                .read-more-link::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    transition: left 0.5s;
                }

                .read-more-link:hover::before {
                    left: 100%;
                }

                .read-more-link:hover {
                    background: linear-gradient(135deg, #15803d 0%, #166534 100%);
                    box-shadow: 0 15px 30px -5px rgba(22, 163, 74, 0.5), 0 8px 12px -4px rgba(22, 163, 74, 0.3);
                    transform: translateY(-3px) scale(1.02);
                    border-color: rgba(255, 255, 255, 0.4);
                }

                .read-more-link:active {
                    transform: translateY(-1px) scale(0.98);
                }

                .read-more-link svg {
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .read-more-link:hover svg {
                    transform: translateX(4px);
                }

                @media (min-width: 640px) {
                    .about-section {
                        padding: 4rem 0;
                    }

                    .container {
                        padding: 0 1.5rem;
                    }

                    .ngo-badge-wrapper {
                        margin-bottom: 2rem;
                    }

                    .ngo-badge {
                        padding: 0.5rem 1rem;
                        font-size: 0.875rem;
                    }

                    .ngo-badge-dot {
                        width: 0.5rem;
                        height: 0.5rem;
                    }

                    .title-section {
                        margin-bottom: 4rem;
                    }

                    .main-title {
                        font-size: 2.25rem;
                        margin-bottom: 1.5rem;
                    }

                    .title-underline {
                        width: 6rem;
                        margin-bottom: 1.5rem;
                    }

                    .subtitle {
                        font-size: 1.25rem;
                    }

                    .content-grid {
                        gap: 3rem;
                    }

                    .main-image {
                        height: 400px;
                    }

                    .impact-badge {
                        bottom: -1rem;
                        right: -1rem;
                        padding: 0.75rem 1.5rem;
                    }

                    .impact-number {
                        font-size: 1.5rem;
                    }

                    .impact-text {
                        font-size: 0.875rem;
                    }

                    .story-section {
                        margin-bottom: 2rem;
                    }

                    .story-title {
                        font-size: 1.5rem;
                    }

                    .story-text {
                        font-size: 1rem;
                    }

                    .mission-vision-box {
                        padding: 1.5rem;
                    }

                    .mission-vision-title {
                        font-size: 1.25rem;
                    }

                    .mission-vision-text {
                        font-size: 1rem;
                    }
                }

                @media (min-width: 768px) {
                    .main-title {
                        font-size: 3rem;
                    }

                    .subtitle {
                        font-size: 1.5rem;
                    }

                    .main-image {
                        height: 500px;
                    }
                }

                @media (min-width: 1024px) {
                    .about-section {
                        padding: 5rem 0;
                    }

                    .container {
                        padding: 0 2rem;
                    }

                    .main-title {
                        font-size: 3.75rem;
                    }

                    .content-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 4rem;
                    }

                    .image-wrapper {
                        order: 1;
                        max-width: none;
                    }

                    .text-content {
                        order: 2;
                    }

                    .main-image {
                        height: 600px;
                    }
                }
            `}</style>

            <section className="about-section">
                <div className="container">
                    {/* NGO Badge */}
                    <div className="ngo-badge-wrapper">
                        <div className="ngo-badge">
                            <div className="ngo-badge-dot"></div>
                            Women-led Nonprofit · Since 1996
                        </div>
                    </div>

                    {/* Main Title Section */}
                    <div className="title-section">
                        <h2 className="main-title">Who we are</h2>
                        <div className="title-underline"></div>
                        <p className="subtitle">
                            At Bamporeze, we believe every child deserves protection, every woman deserves empowerment, and every family deserves hope. Together with communities, we turn challenges into opportunities for a brighter, sustainable future.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="content-grid">
                        {/* Image with NGO-style overlay */}
                        <div className="image-wrapper">
                            <div className="image-container">
                                <Image 
                                    src="/images/about_pic_1.jpg"
                                    width={800}
                                    height={800} 
                                    loading="lazy" 
                                    alt="Bamporeze Association helping vulnerable children" 
                                    className="main-image"
                                />
                                <div className="image-overlay"></div>
                            </div>
                            {/* Impact badge on image */}
                            <div className="impact-badge">
                                <div className="impact-number">29</div>
                                <div className="impact-text">Years of Impact</div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-content">
                            <div className="story-section">
                                <div className="story-title">Our story</div>
                                <div className="story-text">
                                    {isAboutPage ? (
                                        <>
                                            <p>Bamporeze was founded in 1996 with a simple but powerful message in mind: Building hope through families, shaping futures through children. Born in the aftermath of the 1994 Genocide against the Tutsi, Rwanda was in a deep humanitarian crisis. Families had been torn apart, children were left vulnerable, and communities struggled to rebuild.</p>
                                            
                                            <p>In response, Bamporeze began its journey by supporting children, youth, and vulnerable families with urgent humanitarian aid, providing food, clothing, shelter, and psychosocial support. At the same time, the organization focused on empowering families to restore their dignity and independence by building their capacity to start income-generating activities.</p>
                                            
                                            <p>As HIV and AIDS continued to devastate communities, Bamporeze expanded its mission to include HIV prevention and Sexual and Reproductive Health and Rights (SRHR), ensuring that young people and families had the knowledge and resources to live healthier lives.</p>
                                            
                                            <p>Today, Bamporeze has evolved into a dynamic organization committed to alleviating poverty, building resilience, and protecting the rights of women and children. Our programs now include education (basic education and early childhood development), child protection, community development, health, and environmental protection, which are all designed to strengthen families and communities.</p>
                                            
                                            <p>Over the years, our work has been made possible through the support of global and national partners, including UNICEF, UNHCR, the Global Fund, Kindernothilfe (KNH), Plan International, Help a Child, AHF, Sanofi Foundation, Cornerstone Trust, and Firelight Foundation. Together, we have reached thousands of children, women, and families across Rwanda, turning a story of loss into a story of hope and resilience.</p>
                                        </>
                                    ) : (
                                        <>
                                            <p>Bamporeze was founded in 1996 with a simple but powerful message in mind: Building hope through families, shaping futures through children. Born in the aftermath of the 1994 Genocide against the Tutsi, Rwanda was in a deep humanitarian crisis. Families had been torn apart, children were left vulnerable, and communities struggled to rebuild.</p>
                                            
                                            <p>In response, Bamporeze began its journey by supporting children, youth, and vulnerable families with urgent humanitarian aid, providing food, clothing, shelter, and psychosocial support. At the same time, the organization focused on empowering families to restore their dignity and independence by building their capacity to start income-generating activities.</p>
                                            
                                            <p>Today, Bamporeze has evolved into a dynamic organization committed to alleviating poverty, building resilience, and protecting the rights of women and children. Our programs now include education, child protection, community development, health, and environmental protection, which are all designed to strengthen families and communities.</p>
                                            
                                            <div className="read-more-wrapper">
                                                <Link href={`/${currentLocale}/about`} className="read-more-link">
                                                    <span>Read More About Us</span>
                                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Mission and Vision */}
                            <div className="mission-vision-box">
                                <div className="mission-vision-item">
                                    <div className="mission-vision-title">Mission</div>
                                    <div className="mission-vision-text">To promote child protection, gender equality, and sustainable development through community-driven approaches and advocacy.</div>
                                </div>
                                <div className="mission-vision-item">
                                    <div className="mission-vision-title">Vision</div>
                                    <div className="mission-vision-text">We envision an empowered community where every child thrives and lives a life of dignity.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}