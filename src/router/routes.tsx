import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import UsersDetailsSinglePage from "../pages/UsersDetailsSinglePage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {path: '', element: <HomePage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/details', element: <UsersDetailsSinglePage/>},
        ]
    }
])