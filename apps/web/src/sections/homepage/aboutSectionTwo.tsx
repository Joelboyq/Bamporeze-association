"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ImpactMetric {
  value: string;
  label: string;
  emoji?: string;
}

const getIcon = (type: string) => {
  switch (type) {
    case 'children':
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      );
    case 'education':
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'community':
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case 'impact':
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function AboutSectionTwo({  }) {
    const currentPath = usePathname();
    const itTrue = currentPath.includes("about");
    
    const impactMetrics: ImpactMetric[] = [
        { value: "30,000+", label: "Children reached with education, protection, and psychosocial support", emoji: "children" },
        { value: "500+", label: "Women's Self-Help Groups (SHGs) formed", emoji: "community" },
        { value: "Thousands", label: "Families supported with livelihood skills and income-generating activities", emoji: "impact" },
        { value: "Expanded", label: "HIV prevention & SRHR programs for youth", emoji: "education" },
        { value: "Reforestation", label: "Environmental protection initiatives", emoji: "impact" },
        { value: "29", label: "Years of Impact", emoji: "impact" },
    ];

    return (
        <>
            <style jsx>{`
                .impact-section {
                    background-color: #003d1d;
                    padding: 4rem 0;
                }

                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }

                .title-section {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .section-title {
                    font-size: 2.25rem;
                    font-weight: bold;
                    color: white;
                    margin-bottom: 1.5rem;
                    line-height: 1.2;
                }

                .title-underline {
                    width: 6rem;
                    height: 0.25rem;
                    background-color: #4ade80;
                    margin: 0 auto 1.5rem;
                }

                .section-subtitle {
                    font-size: 1.25rem;
                    color: rgba(255, 255, 255, 0.9);
                    max-width: 56rem;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .content-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    align-items: center;
                }

                .left-content {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .metrics-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }

                .metric-card {
                    background-color: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(8px);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    text-align: center;
                    transition: all 0.3s;
                }

                .metric-card:hover {
                    background-color: rgba(255, 255, 255, 0.15);
                }

                .metric-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.75rem;
                }

                .icon {
                    color: white;
                }

                .metric-value {
                    font-weight: bold;
                    color: white;
                    font-size: 1.875rem;
                    line-height: 1;
                }

                .metric-label {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.9);
                    text-align: center;
                    line-height: 1.3;
                }

                .description-box {
                    background-color: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(8px);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .description-text {
                    font-size: 1.125rem;
                    line-height: 1.6;
                    color: rgba(255, 255, 255, 0.9);
                }

                .cta-wrapper {
                    padding-top: 1rem;
                }

                .cta-button {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: white;
                    color: #003d1d;
                    padding: 1rem 2rem;
                    font-size: 1.125rem;
                    font-weight: 600;
                    border-radius: 0.5rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s;
                    text-decoration: none;
                }

                .cta-button:hover {
                    background-color: #f3f4f6;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                }

                .cta-content {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .image-wrapper {
                    position: relative;
                }

                .image-container {
                    position: relative;
                    overflow: hidden;
                    border-radius: 1rem;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }

                .main-image {
                    width: 100%;
                    height: 500px;
                    object-fit: cover;
                    transition: transform 0.7s;
                }

                .main-image:hover {
                    transform: scale(1.05);
                }

                .image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
                }

                .achievement-badge {
                    position: absolute;
                    bottom: -1rem;
                    left: -1rem;
                    background-color: white;
                    padding: 1.5rem;
                    border-radius: 0.75rem;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                    border: 1px solid #f3f4f6;
                    text-align: center;
                }

                .badge-value {
                    font-weight: bold;
                    color: #16a34a;
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }

                .badge-label {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #4b5563;
                }

                @media (min-width: 768px) {
                    .section-title {
                        font-size: 3rem;
                    }

                    .section-subtitle {
                        font-size: 1.5rem;
                    }

                    .metric-value {
                        font-size: 2.25rem;
                    }

                    .metric-label {
                        font-size: 1rem;
                    }

                    .cta-button {
                        width: auto;
                    }
                }

                @media (min-width: 1024px) {
                    .impact-section {
                        padding: 5rem 0;
                    }

                    .container {
                        padding: 0 3rem;
                    }

                    .section-title {
                        font-size: 3.75rem;
                    }

                    .content-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 4rem;
                    }

                    .main-image {
                        height: 600px;
                    }
                }
            `}</style>

            <section className="impact-section">
                <div className="container">
                    {/* Title Section */}
                    <div className="title-section">
                        <h2 className="section-title">
                            Our Impact
                        </h2>
                        <div className="title-underline"></div>
                        <p className="section-subtitle">
                            "Our work is more than numbers, it's the story of families lifted from poverty, children growing up safe, and communities shaping brighter futures."
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="content-grid">
                        {/* Left Side - Content and Metrics */}
                        <div className="left-content">
                            {/* Impact Metrics Grid */}
                            <div className="metrics-grid">
                                {impactMetrics.map((metric, index) => (
                                    <div key={index} className="metric-card">
                                        <div className="metric-content">
                                            {metric.emoji && (
                                                <div>
                                                    {getIcon(metric.emoji)}
                                                </div>
                                            )}
                                            <div className="metric-value">
                                                {metric.value}
                                            </div>
                                            <div className="metric-label">
                                                {metric.label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Descriptive Text Content */}
                            <div className="description-box">
                                <div className="description-text">
                                    For over two decades, the Bamporeze Association has collaborated closely with communities, local leaders, and partners to transform lives across Rwanda. Our programs put families at the center, empowering them to overcome poverty, protect their children, and build brighter futures.<br/><br/>
                                    <b>What We've Achieved Together</b><br/>
                                    • 30,000+ children reached with education, protection, and psychosocial support.<br/>
                                    • 500+ women's Self-Help Groups (SHGs) formed, strengthening economic independence and advocacy.<br/>
                                    • Thousands of families supported with livelihood skills and income-generating activities.<br/>
                                    • Expanded HIV prevention & SRHR programs, equipping young people with knowledge and access to health services.<br/>
                                    • Reforestation & environmental protection initiatives, promoting eco-friendly practices in vulnerable communities.<br/><br/>
                                    <b>Beyond Numbers</b><br/>
                                    Our impact is not just in statistics, it's in the resilience of families who can now provide for themselves, in children who grow up safe and protected, and in communities that stand stronger together.
                                </div>
                            </div>

                            {/* Call to Action */}
                            {!itTrue && (
                                <div className="cta-wrapper">
                                    <Link href="/about" className="cta-button">
                                        <div className="cta-content">
                                            Read More
                                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Right Side - Image */}
                        <div className="image-wrapper">
                            <div className="image-container">
                                <Image 
                                    src="/images/about_pic_2.jpg" 
                                    width={600} 
                                    height={600} 
                                    loading="lazy" 
                                    alt="Our impact descriptive image" 
                                    className="main-image"
                                />
                                <div className="image-overlay"></div>
                            </div>
                            
                            {/* Floating achievement badge */}
                            <div className="achievement-badge">
                                <div className="badge-value">
                                    ✅ 95%
                                </div>
                                <div className="badge-label">
                                    Success Rate
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}