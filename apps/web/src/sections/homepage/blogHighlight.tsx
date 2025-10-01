import Link from "next/link";
import { getBlogHighlight, getBlogs } from "../../utils/api";
import TwitterTimeline from '../../components/units/TwitterTimeline';
import styles from './blogHighlight.module.css';

export default async function BlogHighlight() {
    const featuredBlog = await getBlogHighlight();
    const recentBlogs = await getBlogs();
    
    if (!featuredBlog) return null;
    
    return (
        <section className={styles.blogSection}>
            <div className={styles.container}>
                {/* Title Section */}
                <div className={styles.titleSection}>
                    <h2 className={styles.sectionTitle}>
                        Latest Stories & Updates
                    </h2>
                    <div className={styles.titleUnderline}></div>
                    <p className={styles.sectionSubtitle}>
                        Stay connected with our latest blog posts and social media updates
                    </p>
                </div>

                <div className={styles.contentGrid}>
                    {/* Left Side - Featured Blog */}
                    <div className={styles.leftColumn}>
                        <div className={styles.featuredCard}>
                            {/* Decorative Elements */}
                            <div className={styles.decorativeCircle1}></div>
                            <div className={styles.decorativeCircle2}></div>
                            
                            <div className={styles.cardContent}>
                                {/* Featured Badge */}
                                <div className={styles.featuredBadge}>
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    Featured Story
                                </div>

                                {/* Blog Title */}
                                <h3 className={styles.blogTitle}>
                                    {featuredBlog.title}
                                </h3>

                                {/* Blog Excerpt */}
                                <div 
                                    className={styles.blogExcerpt}
                                    dangerouslySetInnerHTML={{ 
                                        __html: featuredBlog.content?.slice(0, 200) + '...' || '' 
                                    }}
                                />

                                {/* Read More Button */}
                                <Link href={`/blog/${featuredBlog.id}`} className={styles.readMoreBtn}>
                                    Read Full Story
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.arrowIcon}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Recent Blogs Preview */}
                        <div className={styles.recentPostsSection}>
                            <h4 className={styles.recentPostsTitle}>Recent Posts</h4>
                            {recentBlogs.slice(0, 3).map((blog) => (
                                <Link key={blog.id} href={`/blog/${blog.id}`} className={styles.recentPostCard}>
                                    <h5 className={styles.recentPostTitle}>
                                        {blog.title}
                                    </h5>
                                    <div 
                                        className={styles.recentPostExcerpt}
                                        dangerouslySetInnerHTML={{ 
                                            __html: blog.content?.slice(0, 80) + '...' || '' 
                                        }}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - X Posts Frame */}
                    <div className={styles.rightColumn}>
                        <div className={styles.socialHeader}>
                            <h4 className={styles.socialTitle}>Live Updates</h4>
                            <p className={styles.socialSubtitle}>Follow our journey on social media</p>
                        </div>
                        
                        {/* X Posts Scrollable Frame */}
                        <div className={styles.twitterCard}>
                            <div className={styles.twitterHeader}>
                                <div className={styles.twitterIconWrapper}>
                                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h5 className={styles.twitterHandle}>@ABA_Rwanda</h5>
                                    <p className={styles.twitterMeta}>Real-time updates</p>
                                </div>
                            </div>
                            
                            {/* Scrollable X Posts Container */}
                            <div className={styles.twitterTimelineWrapper}>
                                <TwitterTimeline />
                            </div>
                        </div>

                        {/* Follow Us CTA */}
                        <div className={styles.followCta}>
                            <Link 
                                href="https://twitter.com/ABA_Rwanda" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.followBtn}
                            >
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                                Follow Us on X
                                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.externalIcon}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}