
import { logoutUser } from '@/api/requests/auth';
import { IUserPayload } from '@/interfaces/user.interface';
import { queryClient } from '@/lib/queryClient';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
    user: IUserPayload | null;
    isAuthenticated: boolean;
    setUser: (user: IUserPayload) => void;
    logout: () => void;
}

const useUserStore = create<UserState>()(

    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            setUser: (user) => set({ user, isAuthenticated: true }),
            // setUser: (user) => set((state) => {
            //     // prevent unnecessary re-renders if same user
            //     if (JSON.stringify(state.user) === JSON.stringify(user)) return state;
            //     return { user, isAuthenticated: true };
            // }),
            logout: () => {
                logoutUser();
                queryClient.removeQueries();
                set({ user: null, isAuthenticated: false })
            },
        }),
        {
            name: 'user-store',
        }
    )
);

export default useUserStore;
