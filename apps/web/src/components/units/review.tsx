import { IReview } from "@repo/ui/types"
import { Text } from "@repo/ui/units"
import Image from "next/image"
import { FC } from "react"

const Review: FC<IReview> = ({ reviewer_company, review_message, reviewer_name, reviewer_image }) => {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-blue-100">
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
            </div>

            {/* Review Content */}
            <div className="relative z-10">
                {/* Company/Organization */}
                <div className="mb-4">
                    <Text variant="heading3" className="text-lg font-semibold text-gray-900">
                        {reviewer_company}
                    </Text>
                </div>

                {/* Review Message */}
                <div className="mb-6">
                    <Text className="text-gray-700 leading-relaxed italic text-base">
                        &quot;{review_message}&quot;
                    </Text>
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="relative">
                        <Image 
                            width={60} 
                            height={60} 
                            loading="lazy" 
                            className="w-[60px] h-[60px] rounded-full object-cover border-2 border-blue-100" 
                            src={reviewer_image} 
                            alt={reviewer_name} 
                        />
                        {/* Verified badge */}
                        <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <Text variant={'extraSubtitle'} className="font-semibold text-gray-900">
                            {reviewer_name}
                        </Text>
                        <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-yellow-400">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
