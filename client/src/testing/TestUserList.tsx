import { Link } from 'react-router-dom';
import { useFetchUsers } from '@/hooks/user/useUserQuery';

export const TestUserList = () => {
    const { data: users, isLoading, error } = useFetchUsers();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading users.</div>;

    return (
        <div>
            {users?.map((user) => (
                <div key={user._id}>
                    <Link to={`/test/${user.username}`}>
                        <p>{user.firstname} {user.lastname}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};
