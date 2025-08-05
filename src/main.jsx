import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Register from './Routes/Authentication/Resgister'
import AuthProvider from './Context/AuthProvider'
import Layout from './Routes/Layout'

const router = createBrowserRouter([
    {
        path: "/", 
        element: <Layout></Layout>, 
        children: [
            {index: true, element: <h1>hello world</h1>}, 
            {
                path: "all-groups", 
                element: <h1>all groups</h1>
            }
        ]
    },
    {
        path: "/register", 
        element: <Register></Register>
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </StrictMode>,
)
