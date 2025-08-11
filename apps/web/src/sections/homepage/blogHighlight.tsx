import { Text } from "@repo/ui/units";
import Link from "next/link";
import { getBlogHighlight, getBlogs } from "../../utils/api";
import TwitterTimeline from '../../components/units/TwitterTimeline';
import Image from "next/image";

export default async function BlogHighlight() {
    const featuredBlog = await getBlogHighlight();
    const recentBlogs = await getBlogs();
    
    if (!featuredBlog) return null;
    
    return (
        <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Title Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Latest Stories & Updates
                    </h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Stay connected with our latest blog posts and social media updates
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Side - Featured Blog */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 relative overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                            
                            <div className="relative z-10">
                                {/* Featured Badge */}
                                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    Featured Story
                                </div>

                                {/* Blog Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                    {featuredBlog.title}
                                </h3>

                                {/* Blog Excerpt */}
                                <div 
                                    className="text-gray-600 leading-relaxed mb-6"
                                    dangerouslySetInnerHTML={{ 
                                        __html: featuredBlog.content?.slice(0, 200) + '...' || '' 
                                    }}
                                />

                                {/* Read More Button */}
                                <Link href={`/blog/${featuredBlog.id}`}>
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300 flex items-center gap-2 group">
                                        Read Full Story
                                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform group-hover:translate-x-1 transition-transform">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Recent Blogs Preview */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Recent Posts</h4>
                            {recentBlogs.slice(0, 3).map((blog, index) => (
                                <Link key={blog.id} href={`/blog/${blog.id}`}>
                                    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-50 group">
                                        <h5 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                            {blog.title}
                                        </h5>
                                        <div 
                                            className="text-sm text-gray-600 mt-1"
                                            dangerouslySetInnerHTML={{ 
                                                __html: blog.content?.slice(0, 80) + '...' || '' 
                                            }}
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - X Posts Frame */}
                    <div className="space-y-6">
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-gray-900 mb-2">Live Updates</h4>
                            <p className="text-gray-600">Follow our journey on social media</p>
                        </div>
                        
                        {/* X Posts Scrollable Frame */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl border border-purple-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-gray-900">@ABA_Rwanda</h5>
                                    <p className="text-sm text-gray-500">Real-time updates</p>
                                </div>
                            </div>
                            
                            {/* Scrollable X Posts Container */}
                            <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
                                <TwitterTimeline />
                            </div>
                        </div>

                        {/* Follow Us CTA */}
                        <div className="text-center">
                            <Link href="https://twitter.com/ABA_Rwanda" target="_blank" rel="noopener noreferrer">
                                <button className="bg-black hover:bg-gray-800 text-white font-semibold rounded-lg px-8 py-3 transition-all duration-300 flex items-center gap-2 mx-auto group">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                    Follow Us on X
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}