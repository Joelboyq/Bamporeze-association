import { Text } from "@repo/ui/units";
import Image from "next/image";
import Link from "next/link";

// Placeholder images
const PLACEHOLDER_IMAGE = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzQ3NTU2OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiPkJsb2cgSW1hZ2U8L3RleHQ+PC9zdmc+";
const PLACEHOLDER_AVATAR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iI2UyZThmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM0NzU1NjkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIj5VPC90ZXh0Pjwvc3ZnPg==";

// Props type for the component
interface BlogCardProps {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    authorName: string;
    authorImageUrl: string;
    releaseDate: string;
    index: number;
    locale?: string;
}

export default function BlogCard({
    id,
    title,
    description,
    thumbnailUrl = PLACEHOLDER_IMAGE,
    authorName = "Unknown Author",
    authorImageUrl = PLACEHOLDER_AVATAR,
    releaseDate,
    index,
    locale
}: BlogCardProps) {
    // Use query parameter instead of slug
    const blogId = id || `blog-${index}`;
    
    const href = `/${locale ? `${locale}/` : ''}blog?id=${blogId}`;
    
    // Check if we have a valid image
    const hasValidImage = thumbnailUrl && 
      thumbnailUrl !== PLACEHOLDER_IMAGE && 
      !thumbnailUrl.includes('placeholder') &&
      thumbnailUrl.startsWith('/images/') &&
      thumbnailUrl.trim() !== '';
    
    return (
        <Link href={href} className="w-full h-full">
            <div className="relative h-full overflow-hidden rounded-xl group">
                <div className={`relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/3] ${hasValidImage ? '' : 'bg-gradient-to-br from-green-600 to-green-800'}`}>
                    {hasValidImage ? (
                        <>
                            <Image 
                                src={thumbnailUrl} 
                                alt={title} 
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority={index < 6}
                                unoptimized={true}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6">
                                <Text variant="heading4" className="text-white mb-1 line-clamp-2">
                                    {title}
                                </Text>
                                <p className="text-white/80 text-sm line-clamp-2">
                                    {description && description.length > 0 ? `${description.slice(0, 110)}...` : ""}
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="3"/>
                                    <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="2"/>
                                    <path d="M100 30 L100 170 M30 100 L170 100" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M60 60 L140 140 M140 60 L60 140" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <Text variant="heading4" className="text-white mb-2 line-clamp-2">
                                    {title}
                                </Text>
                                <p className="text-white/90 text-sm line-clamp-2">
                                    {description && description.length > 0 ? `${description.slice(0, 110)}...` : ""}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
} 