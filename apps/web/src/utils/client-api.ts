// Client-side API functions for use in client components
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function clientGetBlog(blogId: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/writing/${blogId}`, {
            cache: 'no-store'
        });
        
        if (!response.ok) {
            console.error(`Blog API responded with status: ${response.status}`);
            throw new Error(`Failed to fetch blog: ${response.status}`);
        }
        
        const blogData = await response.json();
        
        // Increment read counter
        try {
            await fetch(`${API_BASE_URL}/writing/read/${blogId}`, {
                cache: 'no-store'
            });
        } catch (error) {
            console.warn("Error incrementing read counter, ignoring:", error);
        }
        
        return blogData.data;
    } catch (error) {
        console.error("Error fetching blog:", error);
        return {
            id: "fallback-blog-1",
            title: "Understanding Educational Leadership",
            content: "Education leadership is crucial for developing effective learning environments...",
            thumbnail_image: "/placeholder-blog.jpg",
            created_at: new Date().toISOString(),
            writingType: "Blog",
            author: { name: "SUPER ADMIN", profile_picture: "" },
            description: "",
            isReleased: true,
            releaseDate: new Date().toISOString()
        };
    }
}

export async function clientGetBlogs() {
    try {
        const response = await fetch(`${API_BASE_URL}/writing/blogs/for-site`, {
            cache: 'no-store'
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch blogs: ${response.status}`);
        }
        
        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
}

export async function clientGetBlogHighlight() {
    try {
        const response = await fetch(`${API_BASE_URL}/writing/blogs/random`, {
            cache: 'no-store'
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch blog highlight: ${response.status}`);
        }
        
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching blog highlight:", error);
        return {
            id: "fallback-blog-1",
            title: "Understanding Educational Leadership",
            content: "Education leadership is crucial for developing effective learning environments...",
            thumbnail_image: "/placeholder-blog.jpg",
            created_at: new Date().toISOString(),
            writingType: "Blog",
            author: { name: "SUPER ADMIN", profile_picture: "" },
            description: "",
            isReleased: true,
            releaseDate: new Date().toISOString()
        };
    }
}
