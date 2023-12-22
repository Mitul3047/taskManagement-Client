import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PostTask from "../Pages/Dashboard/PostTask";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllTask from "../Pages/Dashboard/AllTask";
import ContactUs from "../Pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>  
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>  
            },
            {
                path:'/contact',
                element: <ContactUs></ContactUs>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/postTask',
                element:<PostTask></PostTask>
            },
            {
                path: '/dashboard/alltask',
                element:<AllTask></AllTask>
            },
        ]
    }
])