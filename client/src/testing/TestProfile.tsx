import { useFetchMyPosts } from '@/hooks/useMe';
import { useFetchUserFollowings, useFetchUserProfile } from '@/hooks/user/useUserQuery';
import { Link, useParams } from 'react-router-dom';
import { TestUserList } from './TestUserList';


export const TestUserProfilePage = () => {

    const { username } = useParams()

    if (!username) return (
        <div>No username</div>
    )
    const { data: user, isLoading: userLoading } = useFetchUserProfile(username);
    const { data: followings, isLoading: followingsLoading } = useFetchUserFollowings(user._id);
    const { data: posts, isLoading: postsLoading } = useFetchMyPosts(user._id);


    if (userLoading) return <div>Loading user profile...</div>;

    if (followingsLoading) return <div>Loading...</div>;
    if (postsLoading) return <div>Loading...</div>;

    return (
        <main className="flex">
            <section className="flex-2 px-20">
                <h1 className="text-5xl">{user.firstname} {user.lastname}</h1>
                <div>
                    <h2>Posts</h2>
                    {posts?.map((post) => (
                        <div key={post._id}>
                            <h3>{post.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
            <aside className="flex-1 hidden lg:block">
                <h2>Following</h2>
                {followings?.map((following) => (
                    <div key={following._id}>
                        <Link to={`/test/${following.username}`}>
                            <p>{following.firstname} {following.lastname}</p>
                        </Link>
                    </div>
                ))}
                <TestUserList />
            </aside>
        </main>
    );
};
