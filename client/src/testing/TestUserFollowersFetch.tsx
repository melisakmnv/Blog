import useUserStore from "@/store/useUserStore"
import { useFetchUserFollowings, useFetchUserProfile, useFetUserFollowers } from "./testHooks";
import { Link, useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";



export const TestUserFollowersFetch = () => {

    const { user: currentUser } = useUserStore();
    const { data: followers, isLoading, error } = useFetUserFollowers(currentUser?._id || "", {
        page: 1,
        limit: 5,
        enabled: !!currentUser?._id,
    });


    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching followers</p>;
    }

    return (
        <div className="container">
            <h1 className="title">Your Followers</h1>
            <div className="followers-list">
                {
                    followers?.map((follower) => (

                        <Link to={`/test/${follower.username}`} key={follower._id}>
                            <div >{follower.firstname}</div>
                        </Link>
                    ))
                }
            </div>
            <div className="pagination">
                <Button className="pagination-button" disabled>
                    Previous
                </Button>
                <span className="pagination-text">Page 1 of 10</span>
                <Button className="pagination-button">
                    Next
                </Button>
            </div>
        </div>
    )
}




export const FollowerProfile = () => {

    const { username } = useParams()

    if (!username) return (
        <div>No username</div>
    )
    const { data: user, isLoading: userLoading } = useFetchUserProfile(username);

    // TESTING FETCH FOLLOWERS //
    // const { data: followers, isLoading: followersLoading, error } = useFetUserFollowers(user?._id || "", {
    //     page: 1,
    //     limit: 5,
    //     enabled: !!user?._id, // Only enable the query when currentUser._id exists
    // });


    const { data: followings, isLoading: followingsLoading, error } = useFetchUserFollowings(user?._id || "", {
        page: 1,
        limit: 5,
        enabled: !!user?._id,
    })

    if (userLoading) return <div>Loading user profile...</div>;


    if (followingsLoading) {
        return <p>Followings loadingg...</p>;
    }

    if (error) {
        return <p>Error fetching followers</p>;
    }

    return (

        <div>
            <h1>{user?.firstname}'s Profile</h1>


            <Separator className="bg-secondary" />
            <div className="followers-list">
                <h2>{user?.firstname}'s Followers : </h2>
                <p>{user?.followers.length} followers</p>
                {
                    followings?.map((follower) => (

                        <Link to={`/test/${follower.username}`} key={follower._id}>
                            <div >{follower.firstname}</div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}