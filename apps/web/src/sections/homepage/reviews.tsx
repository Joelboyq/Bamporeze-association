import { WithLocaleProp } from "../../components/units/navbar";
import Review from "../../components/units/review";
import { getReviews } from "../../utils/api";
import { getDictionary } from "../../utils/dictionary";

export default async function Reviews({ locale }: WithLocaleProp) {
    const reviews = await getReviews()
    const dictionary = getDictionary(locale)

    return (
        <>
            {reviews && reviews.length != 0 && (
                <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="container mx-auto px-6 lg:px-12">
                        {/* Title Section */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                {dictionary.pages.home.reviews.title}
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                {dictionary.pages.home.reviews.subtitle}
                            </p>
                        </div>

                        {/* Reviews Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {reviews.map((review, index) => (
                                <Review key={index} {...review} />
                            ))}
                        </div>

                        {/* Trust Indicator */}
                        <div className="text-center mt-16">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium">
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
    )
}