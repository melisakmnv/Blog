import './index.css'
import App from './App.tsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


import { Home } from './pages/Home.tsx';
import { Login } from './pages/connexion/Login.tsx';
import { Posts } from './pages/posts/Posts.tsx';
import { Post } from './pages/posts/Post.tsx';
import { Profile } from './pages/profile/Profile.tsx';




const router = createBrowserRouter(
    [
        {
            element: <App />,
            children: [

                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/login",
                    element: <Login />
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
                    path: "/profile",
                    element: <Profile />
                },
            ]
        },


    ]
)



const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>,
)
