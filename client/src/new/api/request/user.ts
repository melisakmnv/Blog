import { axiosInstance } from "../instance";



export interface IUserProfile {
    _id: string;
    firstname: string;
    lastname: string;
    pseudonym: string;
    tagline: string;
    username: string;
    avatar: string;
    bio: string;
}

export interface IPost {

    _id: string;
    author: IUserProfile;
    title: string;
    cover: string;
    description: string;
    content: string;
    readingTime: string;
    tag: string;
    likes: IUserProfile[];
    savedBy: IUserProfile[];
    comments: [];
    createdAt: string;
    updatedAt: string;
    slug: string;
}




export const getUserProfile = async (username: string): Promise<IUserProfile> => {
    try {

        const { data } = await axiosInstance.get(`/users/${username}`)
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}

export const getUserPosts = async (username: string): Promise<IPost[]> => {
    try {

        const { data } = await axiosInstance.get(`/users/${username}/posts`)
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}

export const getUserFollowings = async (username: string): Promise<IUserProfile[]> => {

    try {

        const { data } = await axiosInstance.get(`/users/${username}/followings`)
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}