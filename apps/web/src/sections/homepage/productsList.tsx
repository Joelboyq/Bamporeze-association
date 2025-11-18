'use client'
import Image from "next/image";
import { WithLocaleProp } from "../../components/units/navbar";
import { getDictionary } from "../../utils/dictionary";
import Link from "next/link";
import styles from './productsList.module.css';

interface ProgramItem {
    title: string;
    description: string;
    image: string;
    category?: string;
    status?: string;
}

export default function ProductsList({ locale }: WithLocaleProp) {
    const dictionary = getDictionary(locale) as any;
    
    const programItems: ProgramItem[] = [
        { 
            title: "Education Support",
            description: "Providing scholarships, school supplies, and educational resources to vulnerable children. Our comprehensive approach ensures every child has access to quality education through basic education and early childhood development programs.",
            image: "/images/DSC02515copy.jpg",
            category: "Education",
            status: "Active"
        },
        { 
            title: "Healthcare Access",
            description: "Improving health services for rural communities through medical camps, health education, HIV prevention, Sexual and Reproductive Health and Rights (SRHR) programs, and infrastructure development.",
            image: "/images/sulfur.jpg",
            category: "Healthcare",
            status: "Active"
        },
        { 
            title: "Community Development",
            description: "Empowering communities through Self-Help Groups, financial literacy training, entrepreneurship skills, and socio-economic empowerment programs that build resilience and reduce poverty.",
            image: "/images/tungsten.jpg",
            category: "Community",
            status: "Active"
        },
        { 
            title: "Child Protection",
            description: "Protecting vulnerable children through awareness-raising campaigns on child protection, positive parenting, psychosocial support, and ensuring children's rights are respected and upheld.",
            image: "/images/ETN02932copy.jpg",
            category: "Protection",
            status: "Active"
        },
        { 
            title: "Environmental Protection",
            description: "Promoting environmental sustainability through reforestation initiatives, energy-saving stoves distribution, water harvesting, and eco-friendly practices that protect our planet while improving community livelihoods.",
            image: "/images/gold.jpg",
            category: "Environment",
            status: "Active"
        }
    ];
    
    return (
        <section className={styles.productsSection}>
            <div className={styles.fullWidth}>
                {/* Professional Title Section */}
                <div className={styles.titleContainer}>
                    <div className={styles.titleContent}>
                        {/* NGO Badge */}
                        <div className={styles.ngoBadge}>
                            <div className={styles.pulseDot}></div>
                            Our Core Programs
                        </div>
                        
                        {/* Main Title */}
                        <h2 className={styles.mainTitle}>
                            Our Programs
                        </h2>
                    </div>
                </div>

                {/* Four Panel Layout - Full Width */}
                <div className={styles.programsGrid}>
                    {programItems.map((program, index) => (
                        <div 
                            key={index} 
                            className={styles.programCard}
                        >
                            {/* Big Hover Background Effect */}
                            <div className={`${styles.hoverOverlay} ${styles[`hoverColor${index}`]}`}></div>
                            
                            {/* Program image */}
                            <Image 
                                src={program.image} 
                                fill
                                style={{ objectFit: 'cover' }}
                                alt={program.title} 
                                className={styles.programImage}
                            />
                            
                            {/* Gradient overlay */}
                            <div className={styles.gradientOverlay}></div>
                            
                            {/* Content */}
                            <div className={styles.cardContent}>
                                {/* Category Badge */}
                                <div className={`${styles.categoryBadge} ${styles[`badgeColor${index}`]}`}>
                                    <div className={`${styles.badgeDot} ${styles[`dotColor${index}`]}`}></div>
                                    {program.category}
                                </div>
                                
                                {/* Title */}
                                <h3 className={styles.programTitle}>
                                    {program.title}
                                </h3>
                                
                                {/* Description */}
                                <div className={styles.descriptionWrapper}>
                                    <p className={styles.programDescription}>
                                        {program.description}
                                    </p>
                                </div>
                                
                                {/* Status and CTA */}
                                <div className={styles.cardFooter}>
                                    <div className={styles.statusIndicator}>
                                        <div className={styles.statusDot}></div>
                                        <span className={styles.statusText}>{program.status} Program</span>
                                    </div>
                                    
                                    <Link href={`/${locale}/programs/${index === 0 ? 'education' : index === 1 ? 'healthcare' : index === 2 ? 'economic' : index === 3 ? 'infrastructure' : 'infrastructure'}`}>
                                        <button className={`${styles.learnMoreBtn} ${styles[`btnColor${index}`]}`}>
                                            Learn More!
                                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.arrowIcon}>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}