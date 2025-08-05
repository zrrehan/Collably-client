import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Register from './Routes/Authentication/Resgister'
import AuthProvider from './Context/AuthProvider'
import Layout from './Routes/Layout'
import RoamAround from './Routes/RoamAround'
import CreateGroup from './Routes/CreateGroup'
import Group from './Routes/Group'

const router = createBrowserRouter([
    {
        path: "/", 
        element: <Layout></Layout>, 
        children: [
            {index: true, element: <h1>hello world</h1>}, 
            {
                path: "all-groups", 
                element: <RoamAround></RoamAround>
            }, 
            {
                path: "crete-group", 
                element: <CreateGroup />
            }, 
            {
                path: "groups/:id", 
                element: <Group></Group>
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
