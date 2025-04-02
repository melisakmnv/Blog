import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import { HomePage } from './pages/HomePage.tsx';
import { PostListPage } from './pages/PostListPage.tsx';
import { PostPage } from './pages/PostPage.tsx';
import { Register } from './pages/Register.tsx';
import { LoginPage } from './pages/LoginPage.tsx';
import { WritePostPage } from './pages/WritePostPage.tsx';
import { MainLayout } from './layout/MainLayout.tsx';
import { ClerkProvider } from '@clerk/clerk-react';


// CLERK VERIFICATION //

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter(
    [
        {
            element: <MainLayout />,
            children: [

                {
                    path: "/",
                    element: <HomePage />
                },
                {
                    path: "/posts",
                    element: <PostListPage />
                },
                {
                    path: "/posts/:slug",
                    element: <PostPage />
                },
                {
                    path: "/register",
                    element: <Register />
                },
                {
                    path: "/login",
                    element: <LoginPage />
                },
                {
                    path: "/write",
                    element: <WritePostPage />
                },
            ]
        },


    ]
)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <RouterProvider router={router} />
        </ClerkProvider>
    </StrictMode>,
)
