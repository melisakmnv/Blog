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


import { Home } from './pages/Home.tsx';
import { Login } from './pages/connexion/Login.tsx';
import { Posts } from './pages/posts/Posts.tsx';
import { Post } from './pages/posts/Post.tsx';
import { UserProfile } from './pages/profile/UserProfile.tsx';
import { Write } from './pages/write/Write.tsx';
import { Register } from './pages/connexion/Register.tsx';
import { MyProfile } from './pages/profile/MyProfile.tsx';
import { SettingsPage } from './pages/profile/SettingPage.tsx';
import { ProtectedRoutes } from './components/navigation/ProtectedRoutes.tsx';
import { NotFound } from './pages/NotFound.tsx';


const router = createBrowserRouter(
    [
        {
            element: <App />,
            children: [

                {
                    path: "*",
                    element: <NotFound />
                },
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/register",
                    element: <Register />
                },
                {
                    path: "/posts",
                    element: <Posts />
                },
                {
                    path: "/posts/:slug",
                    element: <Post />
                },
                {
                    path: "/profile/:username",
                    element: <UserProfile />
                },
                {
                    path: "/profile/me",
                    element:
                        (
                            <ProtectedRoutes>
                                <MyProfile />
                            </ProtectedRoutes>
                        )
                },
                {
                    path: "/profile/me/settings",
                    element:
                        (
                            <ProtectedRoutes>
                                <SettingsPage />
                            </ProtectedRoutes>
                        )
                },
                {
                    path: "/new-story",
                    element:
                        (
                            <ProtectedRoutes>
                                <Write />
                            </ProtectedRoutes>
                        )
                },
                {
                    path: "/edit-story/:slug",
                    element:
                        (
                            <ProtectedRoutes>
                                <Write />
                            </ProtectedRoutes>
                        )
                },
            ]
        },


    ]
)



const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
    // <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ToastContainer position="bottom-right" />
        </QueryClientProvider>
    // </StrictMode>,
)
