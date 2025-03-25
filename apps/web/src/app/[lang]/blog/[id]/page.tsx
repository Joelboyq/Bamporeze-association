import { Text } from "@repo/ui/units";
import { Locale } from "../../../../../i18n.config";
import { getBlogById } from "../../../../utils/api";
import { getDictionary } from "../../../../utils/dictionary";
import PageHead from "../../../../components/units/pageTitle";
import WebSection from "../../../../components/layouts/websection";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

// Base64 encoded SVG placeholders
const PLACEHOLDER_IMAGE = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzQ3NTU2OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiPkJsb2cgSW1hZ2U8L3RleHQ+PC9zdmc+";
const PLACEHOLDER_AVATAR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iI2UyZThmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM0NzU1NjkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIj5VPC90ZXh0Pjwvc3ZnPg==";

export default async function BlogPostPage({ params }: { params: { lang: Locale; id: string } }) {
  console.log("Attempting to fetch blog with ID:", params.id);
  const dictionary = getDictionary(params.lang);
  const blog = await getBlogById(params.id);
  
  if (!blog) {
    notFound();
  }
  
  // Format the date for display
  const formattedDate = new Date(blog.publishedAt || blog.createdAt || new Date()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <>

    
      <PageHead
        title={blog.title}
        subtitle={dictionary.pages.blog.subtitle}
        suptitle={dictionary.pages.blog.suptitle}
       
      />
      
      <WebSection about={dictionary.pages.blog.title} className="py-16">

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Image src={blog.thumbnail_image} alt={blog.title} width={1000} height={1000} />
            
            <Text variant="title_2" className="mb-4 p-4">{blog.title}</Text>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image 
                    src={blog.author?.image || PLACEHOLDER_AVATAR}
                    alt={blog.author?.name || "Author"}
                    fill
                    className="object-cover"
                  />
                </div>
                <Text className="text-gray-700">{blog.author?.name || "Bamporeze Team"}</Text>
              </div>
              <Text className="text-gray-500">{formattedDate}</Text>
            </div>
            
           
            
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </div>
          
          <Link href={`/${params.lang}/blog`} className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to all posts
            </Link>
        </div>
      </WebSection>
    </>
  );
} 