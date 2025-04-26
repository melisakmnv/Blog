import { useFetchUsers } from '@/hooks/user/useUserQuery'
import { Link } from 'react-router-dom';

export const Testing = () => {

    const { data: users, isLoading } = useFetchUsers();

    if (isLoading) return (
        <div>Loading..</div>
    )
    return (
        <div>
            {users?.map((user) => (
                <Link key={user._id} to={`/profile/${user.username}`}>
                    <div>{user.firstname}</div>
                </Link>
            ))}
        </div>
    )
}
