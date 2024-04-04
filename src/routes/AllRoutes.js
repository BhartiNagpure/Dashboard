import React from "react";
import { Navigate } from "react-router-dom";
import Sites from "../pages/Masterspages/Sites";
import Vendor from "../pages/Masterspages/Vendor";
import Client from "../pages/Masterspages/Client";
import Item from "../pages/Masterspages/Item";
import Employee from "../pages/Masterspages/Employee";
import NotFoundPage from "../pages/NotFoundPage";
import ContractTenderMaster from "../pages/Masterspages/ContractTenderMaster";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import Sales from "../pages/Transactions/Sales";
import Purchase from "../pages/Transactions/Purchase";
import Wages from "../pages/Transactions/Wages";
import Header from "../layouts/Header";
import Dashboard from "../pages/Dashboard";

const authProtectedRoutes = [
    {path:'/dashboard' , component:<Dashboard/>},
    {path:'/sites' , component:<Sites/>},
    {path:"/clients",component:<Client/>},
    {path:"/vendors",component:<Vendor/>},
    {path:"/items",component:<Item/>},
    {path:"/employees",component:<Employee/>},
    {path:"/contract",component:<ContractTenderMaster/>},
    {path:'/wages', component:<Wages/>},
    {path:'/sales', component:<Sales/>},
    {path:'/purchase', component:<Purchase/>},
    {path:'*', component:<NotFoundPage/>},

]

const publicRoutes = [
    //Authentication
    // { path: "/logout", component: <Logout /> },
    { path: "/login", component: <Login /> },
    // { path: "/forgot-password", component: <ForgetPasswordPage /> },
    { path: "/register", component: <Register /> },
    {path:'/dashboard' , component:<Dashboard/>},
    {path:'/sites' , component:<Sites/>},
    {path:"/clients",component:<Client/>},
    {path:"/vendors",component:<Vendor/>},
    {path:"/items",component:<Item/>},
    {path:"/employees",component:<Employee/>},
    {path:"/contract",component:<ContractTenderMaster/>},
    {path:'/wages', component:<Wages/>},
    {path:'/sales', component:<Sales/>},
    {path:'/purchase', component:<Purchase/>},
]

export {authProtectedRoutes, publicRoutes}