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
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import MyGroups from './Routes/MyGroups'
import { ThemeProvider } from './ThemeProvider'

const queryClient = new QueryClient()

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
            }, 
            {
                path: "my-groups",
                element: <MyGroups></MyGroups>
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
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router}></RouterProvider>
                </QueryClientProvider>
            </AuthProvider>
        </ThemeProvider>
    </StrictMode>,
)
