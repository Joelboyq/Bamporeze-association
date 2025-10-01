import { WithLocaleProp } from "../../components/units/navbar";
import Review from "../../components/units/review";
import { getReviews } from "../../utils/api";
import { getDictionary } from "../../utils/dictionary";
import styles from './reviews.module.css';

export default async function Reviews({ locale }: WithLocaleProp) {
    const reviews = await getReviews();
    const dictionary = getDictionary(locale);
    
    return (
        <>
            {reviews && reviews.length !== 0 && (
                <section className={styles.reviewsSection}>
                    <div className={styles.container}>
                        {/* Title Section */}
                        <div className={styles.titleSection}>
                            <h2 className={styles.sectionTitle}>
                                {dictionary.pages.home.reviews.title}
                            </h2>
                            <div className={styles.titleUnderline}></div>
                            <p className={styles.sectionSubtitle}>
                                {dictionary.pages.home.reviews.subtitle}
                            </p>
                        </div>

                        {/* Reviews Grid */}
                        <div className={styles.reviewsGrid}>
                            {reviews.map((review, index) => (
                                <Review key={index} {...review} />
                            ))}
                        </div>

                        {/* Trust Indicator */}
                        <div className={styles.trustIndicator}>
                            <div className={styles.trustBadge}>
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {locale === 'fr' ? 'Avis Vérifiés' : 'Verified Reviews'}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}