import { IPost, IPostForm, IPostsResponse } from "@/interfaces/post.interface";
import { axiosInstance } from "../instance";

// Type for filter parameters
export interface PostFilters {
  tag?: string;
  author?: string;
  search?: string;
  sort?: string;
  page?: number;
  limit?: number;
}

// GET ALL POST
export const getPosts = async (filters?: PostFilters): Promise<IPostsResponse> => {
    try {
        // Construct the query parameters
        const params = new URLSearchParams();
        
        if (filters) {
            if (filters.tag) params.append('tag', filters.tag);
            if (filters.author) params.append('author', filters.author);
            if (filters.search) params.append('search', filters.search);
            if (filters.sort) params.append('sort', filters.sort);
            if (filters.page) params.append('page', filters.page.toString());
            if (filters.limit) params.append('limit', filters.limit.toString());
        }

        const { data } = await axiosInstance.get("/posts", { params });
        return data;

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}

// GET POST BY SLUG
export const getPostDetails = async (slug: string): Promise<IPost> => {

    try {

        const { data } = await axiosInstance.get(`/posts/${slug}`)
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}


// GET USER POSTS
export const getUserPosts = async (id: string): Promise<IPostsResponse> => {
    try {

        const { data } = await axiosInstance.get(`/posts/user/${id}`)
        return data

    } catch (error) {
        console.error("❌ Error during fetching user' post:", error);
        throw error;
    }
}


// CREATE POST
export const createPost = async (formData: IPostForm): Promise<IPost> => {
    try {

        const { data } = await axiosInstance.post(`/posts/`, formData)
        return data

    } catch (error) {
        console.error("❌ Error during creating post:", error);
        throw error;
    }
}


// EDIT POST
export const editPost = async (id: string, formData: IPostForm): Promise<IPost> => {

    try {
        const { data } = await axiosInstance.patch(`/posts/${id}`, formData)
        return data

    } catch (error) {
        console.error("❌ Error during creating post:", error);
        throw error;
    }
}


// DELETE POST
export const deletePost = async (id:string) => {

    try {

        const { data } = await axiosInstance.delete(`posts/${id}`, {
            withCredentials: true,
        })
        return data

    } catch (error) {
        console.error("❌ Error during saving/unsaving post:", error);
        throw error;
    }
}



// LIKE OR DISLIKE POST 
export const likePost = async (id: string) => {
    try {

        const { data } = await axiosInstance.patch(`posts/${id}/like`, {
            withCredentials: true,
        })
        return data

    } catch (error) {
        console.error("❌ Error during liking/disliking comment:", error);
        throw error;
    }
}


// SAVE OR UNSAVE POST 
export const savePost = async (id: string) => {

    try {

        const { data } = await axiosInstance.patch(`posts/${id}/save`, {
            withCredentials: true,
        })
        return data

    } catch (error) {
        console.error("❌ Error during saving/unsaving post:", error);
        throw error;
    }
}
