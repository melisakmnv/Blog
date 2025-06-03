import { axiosInstance } from "../instance";
import { IPost, IUserProfile } from "./user";

export const getMyProfile = async (): Promise<IUserProfile> => {
    try {
        const { data } = await axiosInstance.get("/users/me")
        return data

    } catch (error) {
        console.error("❌ Error during fetching my profile:", error);
        throw error;
    }
}

export const getMyPosts = async (): Promise<IPost[]> => {
    try {
        const { data } = await axiosInstance.get("/users/me/posts")
        return data

    } catch (error) {
        console.error("❌ Error during fetching my posts:", error);
        throw error;
    }
}

export const getMySavedPosts = async (): Promise<IPost[]> => {
    try {
        const { data } = await axiosInstance.get("/users/me/saved-posts")
        return data

    } catch (error) {
        console.error("❌ Error during fetching my saved posts:", error);
        throw error;
    }

}

export const getMyFollowings = async (): Promise<IUserProfile[]> => {

    try {

        const { data } = await axiosInstance.get("/users/me/followings")
        return data

    } catch (error) {
        console.error("❌ Error during fetching my followings list:", error);
        throw error;
    }
}

export const followUser = async (userId: string) => {
    try {
        const { data } = await axiosInstance.patch(`/users/me/follow/${userId}`)
        return data

    } catch (error) {
        console.error("❌ Error during follow/unfollow:", error);
        throw error;
    }
}