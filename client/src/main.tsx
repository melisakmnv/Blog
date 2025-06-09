import './index.css'
import App from './App.tsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ToastContainer } from "react-toastify";

import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Home } from './new/pages/home/Home.tsx';
import Profile from './new/pages/profile/Profile.tsx';
import { Login } from './new/pages/connexion/Login.tsx';
import { ProtectedRoutes } from './components/navigation/ProtectedRoutes.tsx';
import MyProfile from './new/pages/profile/MyProfile.tsx';
import Post from './new/pages/posts/Post.tsx';


// import { Home } from './pages/Home.tsx';
// import { Login } from './old/pages/connexion/Login.tsx';
// import { Posts } from './old/pages/posts/Posts.tsx';
// import { Post } from './old/pages/posts/Post.tsx';
// import { UserProfile } from './old/pages/profile/UserProfile.tsx';
// import { Write } from './old/pages/write/Write.tsx';
// import { Register } from './old/pages/connexion/Register.tsx';
// import { MyProfile } from './old/pages/profile/MyProfile.tsx';
// import { SettingsPage } from './old/pages/profile/SettingPage.tsx';
// import { ProtectedRoutes } from './old/components/navigation/ProtectedRoutes.tsx';
// import { NotFound } from './old/pages/NotFound.tsx';
// import { HomeT } from './old/pages/home/HomeT.tsx';


const router = createBrowserRouter(
    [
        {
            element: <App />,
            children: [

                // {
                //     path: "*",
                //     element: <NotFound />
                // },
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/profile/:username",
                    element: <Profile />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                // {
                //     path: "/register",
                //     element: <Register />
                // },
                // {
                //     path: "/posts",
                //     element: <Posts />
                // },
                {
                    path: "/posts/:slug",
                    element: <Post />
                },
                // {
                //     path: "/profile/:username",
                //     element: <UserProfile />
                // },
                {
                    path: "/profile/me",
                    element:
                        (
                            <ProtectedRoutes>
                                <MyProfile />
                            </ProtectedRoutes>
                        )
                },
                // {
                //     path: "/profile/me/settings",
                //     element:
                //         (
                //             <ProtectedRoutes>
                //                 <SettingsPage />
                //             </ProtectedRoutes>
                //         )
                // },
                // {
                //     path: "/new-story",
                //     element:
                //         (
                //             <ProtectedRoutes>
                //                 <Write />
                //             </ProtectedRoutes>
                //         )
                // },
                // {
                //     path: "/edit-story/:slug",
                //     element:
                //         (
                //             <ProtectedRoutes>
                //                 <Write />
                //             </ProtectedRoutes>
                //         )
                // },
            ]
        },


    ]
)



const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ToastContainer position="bottom-right" />
        </QueryClientProvider>
    </StrictMode>,
)
