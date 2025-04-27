import { IUserPayload, IUserSummary } from "@/interfaces/user.interface";
import { axiosInstance } from "../instance";
import { UpdateProfileSchema } from "@/schema/user.schema";
// import useUserStore from "@/store/useUserStore";

export const getUserProfile = async (username: string): Promise<IUserPayload> => {

    // const { setUser } = useUserStore.getState()
    try {

        const { data } = await axiosInstance.get(`/users/${username}`)
        // setUser(data.user);
        return data

    } catch (error) {
        console.error("❌ Error during fetching:", error);
        throw error;
    }
}



// FOLLOW OR UNFOLLOW USER //
export const followUser = async (id: string) => {
    try {
        const { data } = await axiosInstance.post(
            `/users/me/follow/${id}`,
            {
                withCredentials: true,
            }
        );

        return data;
    } catch (error) {
        console.error("❌ Error during following:", error);
        throw error;
    }
};

export const editUser = async (formData: UpdateProfileSchema): Promise<IUserPayload> => {
    try {

        const { data } = await axiosInstance.patch(
            `/users/me`, formData,
            {
                withCredentials: true,
            }
        );

        return data;

    } catch (error) {
        console.error("❌ Error during following:", error);
        throw error;
    }
}

export const getUsers = async (
    page: number = 1,
    limit: number = 10
): Promise<IUserPayload[]> => {
    try {
        const { data } = await axiosInstance.get(`/users`, {
            params: { page, limit },
            withCredentials: true,
        });

        return data;
    } catch (error) {
        console.error("❌ Error during fetching users:", error);
        throw error;
    }
}



// // GET MY FOLLOWINGS LIST //
// export const getUserFollowings = async (id: string): Promise<IUserSummary[]> => {

//     try {
//         const { data } = await axiosInstance.get(`/users/${id}/followings`, {
//             withCredentials: true,
//         });

//         return data

//     } catch (error) {
//         console.error("❌ Error during fetching following list:", error);
//         throw error;
//     }
// }




export interface UserListResponse {
    payload: IUserSummary[];
    currentPage: number;
    totalPages: number;
    totalPayload: number;
}


// GET USER FOLLOWERS LIST //  TESTED 
export const getUserFollowers = async (id: string, page: number, limit: number): Promise<UserListResponse> => {

    try {
        const { data } = await axiosInstance.get(`/users/${id}/followers`, {
            params: { page, limit },
            withCredentials: true,
        });

        return data

    } catch (error) {
        console.log(error)
        console.error("❌ Error during fetching followers list:", error);
        throw error;
    }
}

export const getUserFollowings = async (id: string, page: number, limit: number): Promise<UserListResponse> => {

    try {
        const { data } = await axiosInstance.get(`/users/${id}/followings`, {
            params: { page, limit },
            withCredentials: true,
        });

        return data

    } catch (error) {
        console.log(error)
        console.error("❌ Error during fetching followings list:", error);
        throw error;
    }
}