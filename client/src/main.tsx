import './index.css'
import App from './App.tsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";


import { Home } from './pages/Home.tsx';
import { Login } from './pages/connexion/Login.tsx';



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
                
            ]
        },


    ]
)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
