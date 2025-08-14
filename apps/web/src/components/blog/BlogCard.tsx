import { Text } from "@repo/ui/units";
import Image from "next/image";
import Link from "next/link";
import Author from "../../components/units/author";

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
    // Use the ID directly in URL path (not as query parameter)
    const blogId = id || `blog-${index}`;
    
    const href = `/${locale ? `${locale}/` : ''}blog/${blogId}`;
    return (
        <Link href={href} className="w-full h-full">
            <div className="relative h-full overflow-hidden rounded-xl bg-black/5 group">
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/3]">
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
                        <div className="mt-3">
                            <Author 
                                name={authorName} 
                                releaseDate={releaseDate} 
                                profile_image={authorImageUrl} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
} 