import useUserStore from "@/store/useUserStore";


export const Profile = () => {

    const { user, isAuthenticated } = useUserStore();

    if (!isAuthenticated) {
        return <div>Please log in to view your profile</div>;
    }

    return (
        <div>
            <h1>Welcome, {user?.firstname} {user?.lastname}</h1>
            <p>Role: {user?.role}</p>
        </div>
    );
}
