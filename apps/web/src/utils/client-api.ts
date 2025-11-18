// Client-side API functions for use in client components
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function clientGetBlog(blogId: string) {
    // Check for mock blog IDs first and return immediately
    if (blogId === "success-story-ishimwe") {
        return {
            id: "success-story-ishimwe",
            title: "Building Her Future with Strength and Skill",
            content: "At just 16, Ishimwe faced challenges no young girl should have to bear. After giving birth as a teenager, she dropped out of school and endured rejection and conflict at home. With no income and few opportunities, her dreams felt out of reach, and her community expected little of her beyond motherhood. When Bamporeze Association introduced community-based skills training, Ishimwe chose to join a carpentry program, an activity traditionally dominated by men. At first, many doubted her choice, but Ishimwe persevered. She learned how to measure, cut, and build furniture with confidence and determination. Today, Ishimwe earns a steady income from carpentry, supporting both herself and her child. More importantly, she has become a role model for other girls in her community. By stepping into a trade once reserved for men, she is breaking stereotypes and proving that young women can thrive in any field when given the chance. \"I never thought I could build something with my own hands and sell it,\" Ishimwe shares with pride. \"Now I can provide for my child and inspire other girls not to give up.\" Ishimwe's journey shows the power of resilience and the importance of giving adolescent girls practical opportunities. Through economic empowerment and changed perceptions of gender roles, Bamporeze helps young women like Ishimwe build not only furniture, but stronger, brighter futures.",
            thumbnail_image: "",
            created_at: new Date().toISOString(),
            category: "Success Story",
            author: { name: "Bamporeze Association", profile_picture: "" },
            description: "Ishimwe's inspiring journey from vulnerability to empowerment through carpentry skills training",
            writingType: "blog",
            isReleased: true,
            releaseDate: new Date().toISOString()
        };
    }
    
    if (blogId === "success-story-tuzamurane") {
        return {
            id: "success-story-tuzamurane",
            title: "Tuzamurane Self-Help Group – Rising Together in Rulindo",
            content: "In 2019, twenty women from Rulindo District came together to form the Tuzamurane Self-Help Group. They were among the most vulnerable in their community, struggling daily to provide for their families. Access to financial services was out of reach, their voices were rarely heard, and the cycle of poverty weighed heavily on their households. Through the Self-Help Group Approach (SHGA) supported by Bamporeze, these women began a journey of transformation. They learned the value of saving and financial literacy, gaining the confidence to set aside small amounts each week. With time, they were able to access small loans from within the group, funds that allowed them to start businesses and income-generating activities that no bank would have offered them. But Tuzamurane became more than a financial group. It grew into a space of social and emotional empowerment. The women supported one another, built self-esteem, and discovered the power of speaking up. Today, members confidently share their opinions in public forums and are increasingly involved in local decision-making spaces, breaking barriers that once kept them silent. The impact reaches beyond income. With stronger finances, the women are now providing for their families: Their children are enjoying their rights, attending school, and living healthier lives. Families maintain kitchen gardens and prepare balanced meals, improving nutrition. Parents practice positive parenting and ensure household hygiene. All members now contribute to community-based health insurance, ensuring access to healthcare. \"We learned to start small and dream big,\" one member shares. \"Today we are not only feeding our children, we are shaping their future.\" The story of Tuzamurane SHG shows how economic, social, and political empowerment can transform lives. These women, once among the poorest of the poor, are now resilient leaders, proving that when women rise together, entire communities are lifted.",
            thumbnail_image: "",
            created_at: new Date().toISOString(),
            category: "Success Story",
            author: { name: "Bamporeze Association", profile_picture: "" },
            description: "How twenty women transformed their lives through the Self-Help Group Approach",
            writingType: "blog",
            isReleased: true,
            releaseDate: new Date().toISOString()
        };
    }
    
    // Try API for other blog IDs
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
        // Default fallback
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
