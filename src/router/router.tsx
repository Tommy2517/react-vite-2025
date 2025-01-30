import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import OneUserPage from "../pages/OneUserPage.tsx";


export const routes = createBrowserRouter([{
    path:'/', element: <MainLayout/>, children:[
        {path:'users',element:<UsersPage/>},
        {path:'users/:id',element:<OneUserPage/>},
        {path:'posts',element:<PostsPage/>},
    ]}
])
