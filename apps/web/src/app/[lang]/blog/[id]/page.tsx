import { Text } from "@repo/ui/units";
import { Locale } from "../../../../../i18n.config";
import { getBlogById } from "../../../../utils/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

// Base64 encoded SVG placeholders
const PLACEHOLDER_IMAGE = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzQ3NTU2OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiPkJsb2cgSW1hZ2U8L3RleHQ+PC9zdmc+";
const PLACEHOLDER_AVATAR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iI2UyZThmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM0NzU1NjkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIj5VPC90ZXh0Pjwvc3ZnPg==";

export default async function BlogPostPage({ params }: { params: { lang: Locale; id: string } }) {
  const blog = await getBlogById(params.id);
  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(blog.publishedAt || blog.releaseDate || blog.createdAt || new Date()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const authorName = blog.author?.name || "Bamporeze Team";
  const authorImage = blog.author?.profile_picture || blog.author?.image || PLACEHOLDER_AVATAR;
  const coverImage = blog.thumbnail_image || PLACEHOLDER_IMAGE;

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[55vh] lg:h-[65vh] overflow-hidden">
        <Image
          src={coverImage}
          alt={blog.title}
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-75"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 lg:px-8 pb-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Blog
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                {blog.title}
              </h1>
              <div className="flex items-center gap-4 text-white/90">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image src={authorImage} alt={authorName} fill className="object-cover" unoptimized={true} />
                </div>
                <span className="font-medium">{authorName}</span>
                <span className="opacity-60">•</span>
                <span className="opacity-90">{formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-green-600 prose-strong:text-gray-900">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </article>
            <div className="mt-10">
              <Link href={`/${params.lang}/blog`} className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all posts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}