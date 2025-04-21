import { getUserProfile } from "@/api/requests/user"
import { IUserPayload } from "@/interfaces/user.interface"
import { useSuspenseQuery } from "@tanstack/react-query"



// FETCH PUBLIC USER
export const useFetchUserProfile = (username: string) => {

    return useSuspenseQuery<IUserPayload>({
        queryKey: ["userProfile", username],
        queryFn: () => getUserProfile(username)
    })

}