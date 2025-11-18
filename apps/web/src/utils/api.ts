import { BoardMemberClassification, IBoardMember, IJobPosition, IPartnerCompany, IPhoto, IReview, IService, ISlide, IWriting } from "@repo/ui/types"
import { cache } from "react"
import 'server-only'
import { axios } from './axios.config'







export async function fetcher(url: string) {
    return await axios.get(url)
}


const fallbackBlog = {
    id: "fallback-blog-1",
    title: "Understanding Educational Leadership",
    content: "Education leadership is crucial for developing effective learning environments...",
    thumbnail_image: "" as any,
    reads: 0,
    description: "",
    author: {
        name: "SUPER ADMIN",
        email: "admin@bamporeze.com",
        id: "super-admin",
        profile_picture: ""
    },
    writingType: "BLOG" as const,
    isReleased: true,
    releaseDate: new Date().toISOString()
} as IWriting;

// TODO: Restore API calls when backend is ready
// export const getBlogHighlight = cache(async () => {
//     try {
//         const highlight = await fetcher('/writing/blogs/random')
//         return highlight['data'] as IWriting
//     } catch (error) {
//         console.warn("Could not fetch blog highlight, using fallback data:", error)
//         return fallbackBlog as unknown as IWriting
//     }
// })

// Mock data for blog highlight - using success story
export const getBlogHighlight = cache(async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return {
        id: "success-story-ishimwe",
        title: "Building Her Future with Strength and Skill",
        content: "At just 16, Ishimwe faced challenges no young girl should have to bear. After giving birth as a teenager, she dropped out of school and endured rejection and conflict at home. With no income and few opportunities, her dreams felt out of reach, and her community expected little of her beyond motherhood. When Bamporeze Association introduced community-based skills training, Ishimwe chose to join a carpentry program, an activity traditionally dominated by men. At first, many doubted her choice, but Ishimwe persevered. She learned how to measure, cut, and build furniture with confidence and determination. Today, Ishimwe earns a steady income from carpentry, supporting both herself and her child. More importantly, she has become a role model for other girls in her community. By stepping into a trade once reserved for men, she is breaking stereotypes and proving that young women can thrive in any field when given the chance. \"I never thought I could build something with my own hands and sell it,\" Ishimwe shares with pride. \"Now I can provide for my child and inspire other girls not to give up.\" Ishimwe's journey shows the power of resilience and the importance of giving adolescent girls practical opportunities. Through economic empowerment and changed perceptions of gender roles, Bamporeze helps young women like Ishimwe build not only furniture, but stronger, brighter futures.",
        thumbnail_image: "" as any,
        reads: 0,
        description: "Ishimwe's inspiring journey from vulnerability to empowerment through carpentry skills training",
        author: {
            name: "Bamporeze Association",
            email: "info@bamporeze.com",
            id: "bamporeze-association",
            profile_picture: ""
        },
        writingType: "BLOG" as const,
        isReleased: true,
        releaseDate: new Date().toISOString()
    } as IWriting;
})



// TODO: Restore API calls when backend is ready
// export async function getBlogs(): Promise<IWriting[]> {
//     const res = await fetcher('/writing/blogs/for-site')
//     return res.data as IWriting[]
// }

// Mock data for blogs - success stories
export async function getBlogs(): Promise<IWriting[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return [
        {
            id: "success-story-ishimwe",
            title: "Building Her Future with Strength and Skill",
            content: "At just 16, Ishimwe faced challenges no young girl should have to bear...",
            thumbnail_image: "" as any,
            reads: 0,
            description: "Ishimwe's inspiring journey from vulnerability to empowerment",
            author: {
                name: "Bamporeze Association",
                email: "info@bamporeze.com",
                id: "bamporeze-association",
                profile_picture: ""
            },
            writingType: "BLOG" as const,
            isReleased: true,
            releaseDate: new Date().toISOString()
        },
        {
            id: "success-story-tuzamurane",
            title: "Tuzamurane Self-Help Group – Rising Together in Rulindo",
            content: "In 2019, twenty women from Rulindo District came together to form the Tuzamurane Self-Help Group...",
            thumbnail_image: "" as any,
            reads: 0,
            description: "How twenty women transformed their lives through the Self-Help Group Approach",
            author: {
                name: "Bamporeze Association",
                email: "info@bamporeze.com",
                id: "bamporeze-association",
                profile_picture: ""
            },
            writingType: "BLOG" as const,
            isReleased: true,
            releaseDate: new Date().toISOString()
        }
    ] as IWriting[];
}
export async function getGallery(): Promise<IPhoto[]> {
    const res = await fetcher('/gallery')
    return res.data as IPhoto[]
}




export async function getPressReleases(): Promise<IWriting[]> {
    const res = await fetcher('/writing/newsletter')
    return res.data as IWriting[]
}

// TODO: Restore API calls when backend is ready
// export async function getReviews(): Promise<IReview[]> {
//     const res = await fetcher('/reviews')
//     return res.data as IReview[]
// }

// Mock data for reviews
export async function getReviews(): Promise<IReview[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return [] as IReview[];
}


export const getPartnerCompanies = cache(async () => {
    const companies = await fetcher('/partner-companies')
    return companies.data as IPartnerCompany[]
})

// TODO: Restore API calls when backend is ready
// export async function getBlog(blogId: string) {
//     try {
//         // Get the blog metadata (which already includes content)
//         const baseUrl = process.env.NEXT_PUBLIC_API_URL;
//         const metadataResponse = await fetch(`${baseUrl}/writing/${blogId}`, {
//             cache: 'no-store'
//         });
//         
//         if (!metadataResponse.ok) {
//             console.error(`Blog API metadata responded with status: ${metadataResponse.status}`);
//             throw new Error(`Failed to fetch blog metadata: ${metadataResponse.status}`);
//         }
//         
//         const blogData = await metadataResponse.json();
//         
//         // Increment read counter but don't overwrite content
//         try {
//             await fetch(`${baseUrl}/writing/read/${blogId}`, {
//                 cache: 'no-store'
//             });
//         } catch (error) {
//             console.warn("Error incrementing read counter, ignoring:", error);
//         }
//         
//         // Return the blog data with its original content
//         return blogData.data; // Make sure we return the actual data object
//     } catch (error) {
//         console.error("Error fetching blog:", error);
//         return fallbackBlog; // Return fallback blog data
//     }
// }

// Mock data for single blog
export async function getBlog(blogId: string) {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    if (blogId === "success-story-ishimwe") {
        return {
            id: "success-story-ishimwe",
            title: "Building Her Future with Strength and Skill",
            content: "At just 16, Ishimwe faced challenges no young girl should have to bear. After giving birth as a teenager, she dropped out of school and endured rejection and conflict at home. With no income and few opportunities, her dreams felt out of reach, and her community expected little of her beyond motherhood. When Bamporeze Association introduced community-based skills training, Ishimwe chose to join a carpentry program, an activity traditionally dominated by men. At first, many doubted her choice, but Ishimwe persevered. She learned how to measure, cut, and build furniture with confidence and determination. Today, Ishimwe earns a steady income from carpentry, supporting both herself and her child. More importantly, she has become a role model for other girls in her community. By stepping into a trade once reserved for men, she is breaking stereotypes and proving that young women can thrive in any field when given the chance. \"I never thought I could build something with my own hands and sell it,\" Ishimwe shares with pride. \"Now I can provide for my child and inspire other girls not to give up.\" Ishimwe's journey shows the power of resilience and the importance of giving adolescent girls practical opportunities. Through economic empowerment and changed perceptions of gender roles, Bamporeze helps young women like Ishimwe build not only furniture, but stronger, brighter futures.",
            thumbnail_image: "" as any,
            reads: 0,
            description: "Ishimwe's inspiring journey from vulnerability to empowerment through carpentry skills training",
            author: {
                name: "Bamporeze Association",
                email: "info@bamporeze.com",
                id: "bamporeze-association",
                profile_picture: ""
            },
            writingType: "BLOG" as const,
            isReleased: true,
            releaseDate: new Date().toISOString()
        };
    }
    
    if (blogId === "success-story-tuzamurane") {
        return {
            id: "success-story-tuzamurane",
            title: "Tuzamurane Self-Help Group – Rising Together in Rulindo",
            content: "In 2019, twenty women from Rulindo District came together to form the Tuzamurane Self-Help Group. They were among the most vulnerable in their community, struggling daily to provide for their families. Access to financial services was out of reach, their voices were rarely heard, and the cycle of poverty weighed heavily on their households. Through the Self-Help Group Approach (SHGA) supported by Bamporeze, these women began a journey of transformation. They learned the value of saving and financial literacy, gaining the confidence to set aside small amounts each week. With time, they were able to access small loans from within the group, funds that allowed them to start businesses and income-generating activities that no bank would have offered them. But Tuzamurane became more than a financial group. It grew into a space of social and emotional empowerment. The women supported one another, built self-esteem, and discovered the power of speaking up. Today, members confidently share their opinions in public forums and are increasingly involved in local decision-making spaces, breaking barriers that once kept them silent. The impact reaches beyond income. With stronger finances, the women are now providing for their families: Their children are enjoying their rights, attending school, and living healthier lives. Families maintain kitchen gardens and prepare balanced meals, improving nutrition. Parents practice positive parenting and ensure household hygiene. All members now contribute to community-based health insurance, ensuring access to healthcare. \"We learned to start small and dream big,\" one member shares. \"Today we are not only feeding our children, we are shaping their future.\" The story of Tuzamurane SHG shows how economic, social, and political empowerment can transform lives. These women, once among the poorest of the poor, are now resilient leaders, proving that when women rise together, entire communities are lifted.",
            thumbnail_image: "" as any,
            reads: 0,
            description: "How twenty women transformed their lives through the Self-Help Group Approach",
            author: {
                name: "Bamporeze Association",
                email: "info@bamporeze.com",
                id: "bamporeze-association",
                profile_picture: ""
            },
            writingType: "BLOG" as const,
            isReleased: true,
            releaseDate: new Date().toISOString()
        };
    }
    
    return fallbackBlog;
}


export const getSlides = cache(async (): Promise<ISlide[]> => {
    const slides = await fetcher('/homepage-sliders')
    return slides['data'] as ISlide[]
})






export const getBoardMembers = cache(async (classification?: BoardMemberClassification): Promise<IBoardMember[]> => {
    const members = await fetcher(`/officials/${classification ? `?classification=${classification}` : ``}`)
    return members.data as IBoardMember[]
})



export const getServices = cache(async (): Promise<IService[]> => {
    const services = await fetcher('/services')
    return services.data as IService[]
})



export const getJobPositions = cache(async (): Promise<IJobPosition[]> => {
    const jobs = await fetcher('/jobs?type=open')
    return jobs.data as IJobPosition[]
})

export const getSingleJob = cache(async (id: string): Promise<IJobPosition> => {
    const job = await fetcher(`/jobs/${id}`)
    return job.data as IJobPosition
})

export async function getBlogById(id: string) {
    try {
        console.log("Fetching blog with ID:", id);
        const response = await fetcher(`/writing/${id}`);
        console.log("API response for blog:", response.data ? "Data received" : "No data");
        return response.data;
    } catch (error) {
        console.error("Error fetching blog post:", error);
        // Fallback to mock data if API fails
        return await getBlog(id);
    }
}