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
    thumbnail: "/placeholder-blog.jpg",
    created_at: new Date().toISOString(),
    category: "Leadership",
    author: "SUPER ADMIN",
    thumbnail_image: "",
    reads: 0,
    description: "",
    writingType: "blog",
    isReleased: true,
    releaseDate: new Date().toISOString()
};

export const getBlogHighlight = cache(async () => {
    try {
        const highlight = await fetcher('/writing/blogs/random')
        return highlight['data'] as IWriting
    } catch (error) {
        console.warn("Could not fetch blog highlight, using fallback data:", error)
        return fallbackBlog as unknown as IWriting
    }
})



export async function getBlogs(): Promise<IWriting[]> {
    const res = await fetcher('/writing/blogs/for-site')
    return res.data as IWriting[]
}
export async function getGallery(): Promise<IPhoto[]> {
    const res = await fetcher('/gallery')
    return res.data as IPhoto[]
}




export async function getPressReleases(): Promise<IWriting[]> {
    const res = await fetcher('/writing/newsletter')
    return res.data as IWriting[]
}

export async function getReviews(): Promise<IReview[]> {
    const res = await fetcher('/reviews')
    return res.data as IReview[]
}


export const getPartnerCompanies = cache(async () => {
    const companies = await fetcher('/partner-companies')
    return companies.data as IPartnerCompany[]
})

export async function getBlog(blogId: string) {
    try {
        // Get the blog metadata (which already includes content)
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const metadataResponse = await fetch(`${baseUrl}/writing/${blogId}`, {
            cache: 'no-store'
        });
        
        if (!metadataResponse.ok) {
            console.error(`Blog API metadata responded with status: ${metadataResponse.status}`);
            throw new Error(`Failed to fetch blog metadata: ${metadataResponse.status}`);
        }
        
        const blogData = await metadataResponse.json();
        
        // Increment read counter but don't overwrite content
        try {
            await fetch(`${baseUrl}/writing/read/${blogId}`, {
                cache: 'no-store'
            });
        } catch (error) {
            console.warn("Error incrementing read counter, ignoring:", error);
        }
        
        // Return the blog data with its original content
        return blogData.data; // Make sure we return the actual data object
    } catch (error) {
        console.error("Error fetching blog:", error);
        return fallbackBlog; // Return fallback blog data
    }
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
        return null;
    }
}