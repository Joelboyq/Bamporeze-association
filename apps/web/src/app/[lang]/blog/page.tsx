'use client'
import { Text } from "@repo/ui/units";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "../../../../i18n.config";
import { clientGetBlog, clientGetBlogHighlight, clientGetBlogs } from "../../../utils/client-api";
import Author from "../../../components/units/author";
import Tag from "../../../components/units/tag";
import { IWriting } from "@repo/ui/types";
import { redirect } from "next/navigation";
import SectionTitle from "../../../components/units/sectionTitle";
import BlogCard from "../../../components/blog/BlogCard";
import TwitterTimeline from '../../../components/units/TwitterTimeline';
import { useState, useEffect } from "react";

// Base64 encoded SVG placeholders
const PLACEHOLDER_IMAGE = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzQ3NTU2OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiPkJsb2cgSW1hZ2U8L3RleHQ+PC9zdmc+";
const PLACEHOLDER_AVATAR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iI2UyZThmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM0NzU1NjkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIj5VPC90ZXh0Pjwvc3ZnPg==";

export default function Page({ params, searchParams }: { 
  params: { lang: Locale },
  searchParams: { id?: string }
}) {
  const [blogData, setBlogData] = useState<any>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // If ID is provided in query params, show blog detail view
  const blogId = searchParams.id;
  
  useEffect(() => {
    const fetchData = async () => {
      if (blogId) {
        try {
          console.log("Fetching blog with ID:", blogId);
          
          // Fetch blog data using the ID parameter
          const blogResponse = await clientGetBlog(blogId);
          console.log("API Response:", JSON.stringify(blogResponse, null, 2));
          
          // Fetch some other blogs for "Related Articles" section
          const blogsResponse = await clientGetBlogs();
          const related = Array.isArray(blogsResponse) 
              ? (blogsResponse as Array<any>).filter((blog: any) => blog.id !== blogId).slice(0, 3)
              : [];
          
          setBlogData(blogResponse);
          setRelatedBlogs(related);
        } catch (error) {
          console.error("Error fetching blog:", error);
          redirect('/blog');
        }
      }
      setIsLoading(false);
    };

    fetchData();
  }, [blogId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (blogId && blogData) {
    // Check specifically for content
    console.log("Content available:", !!blogData.content, "Content length:", blogData.content?.length || 0);
    
    // Extract data with fallbacks
    const { 
        title = "Untitled Post", 
        content, 
        description = "", 
        thumbnail_image = PLACEHOLDER_IMAGE,
        writingType = "Blog", 
        author, 
        releaseDate = new Date().toISOString()
    } = blogData;
    
    // Check for empty content and provide a meaningful message
    const displayContent = content && content.trim().length > 0 
        ? content 
        : "<p>No content available for this blog post. The content may still be in preparation.</p>";
    
    // Prepare author data
    const authorName = author?.name || "Unknown Author";
    const authorImage = author?.profile_picture || PLACEHOLDER_AVATAR;
    
    // Format date for better display
    const formattedDate = new Date(releaseDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
          <Image
            src={thumbnail_image}
            fill
            style={{ objectFit: 'cover' }}
            alt={title}
            className="brightness-75"
            unoptimized={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  {writingType}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                  {description || "Discover insights, stories, and updates from our community"}
                </p>
                
                {/* Author and Date */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={authorImage}
                      alt={authorName}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-white/20"
                      unoptimized={true}
                    />
                    <div>
                      <p className="font-semibold text-white text-lg">{authorName}</p>
                      <p className="text-gray-300">{formattedDate}</p>
                    </div>
                  </div>
                  
                  {/* Reading Time Estimate */}
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{Math.ceil((content?.length || 0) / 200)} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              {/* Content */}
              <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-green-600 prose-strong:text-gray-900 prose-blockquote:border-l-green-600 prose-blockquote:bg-green-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg">
                <div dangerouslySetInnerHTML={{ __html: displayContent }} />
              </article>
              
              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 font-medium">Share this post:</span>
                    <div className="flex gap-3">
                      <Link 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </Link>
                      <Link 
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </Link>
                      <Link 
                        href={`https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Tag text={writingType} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Related
                  <span className="block text-green-600">Articles</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  You might also be interested in these stories from our blog
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedBlogs.map((blog, index) => (
                  <BlogCard
                    key={blog.id || index}
                    id={blog.id}
                    title={blog.title || "Untitled"}
                    description={blog.description || ""}
                    thumbnailUrl={blog.thumbnail_image || PLACEHOLDER_IMAGE}
                    authorName={blog.author?.name || "Unknown Author"}
                    authorImageUrl={blog.author?.profile_picture || PLACEHOLDER_AVATAR}
                    releaseDate={blog.releaseDate || blog.createdAt || new Date().toISOString()}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to Blog Button */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center">
              <Link href="/blog" className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-8 py-4 text-lg shadow-lg transition-all duration-300 group">
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Posts
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  // If no ID provided, show the blog highlight/homepage
  return <BlogHomepage lang={params.lang} />;
}

// Separate component for blog homepage
function BlogHomepage({ lang }: { lang: Locale }) {
  const [highlight, setHighlight] = useState<any>(null);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [hl, list] = await Promise.all([
          clientGetBlogHighlight(),
          clientGetBlogs()
        ]);
        setHighlight(hl);
        setBlogs(Array.isArray(list) ? list : []);
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAll();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading posts...</p>
        </div>
      </div>
    );
  }

  const posts = blogs || [];

  return (
    <div className="min-h-screen bg-white">
      {highlight && (
        <section className="relative h-[55vh] lg:h-[65vh] overflow-hidden">
          <Image 
            src={highlight.thumbnail_image || PLACEHOLDER_IMAGE} 
            alt={highlight.title || "Featured post"} 
            fill
            style={{ objectFit: 'cover' }}
            className="brightness-75"
            loading="eager"
            unoptimized={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 lg:px-8 pb-8">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Featured Story
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  {highlight.title}
                </h1>
                <p className="text-base md:text-xl text-gray-200 mb-4 md:mb-6 leading-relaxed line-clamp-3">
                  {highlight.description || "Discover insights, stories, and updates from our community"}
                </p>
                <Link href={`/blog/${highlight.id}`} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-5 py-3 text-sm md:text-base shadow-lg transition-all duration-300 group">
                  Read full story
                  <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {posts
              .filter((p) => p.id !== highlight?.id)
              .map((blog, index) => (
                <BlogCard
                  key={blog.id || index}
                  id={blog.id}
                  title={blog.title || "Untitled"}
                  description={blog.description || ""}
                  thumbnailUrl={blog.thumbnail_image || PLACEHOLDER_IMAGE}
                  authorName={blog.author?.name || "Unknown Author"}
                  authorImageUrl={blog.author?.profile_picture || PLACEHOLDER_AVATAR}
                  releaseDate={blog.releaseDate || blog.createdAt || new Date().toISOString()}
                  index={index}
                  locale={params.lang}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}