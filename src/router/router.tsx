import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/mainLayout.tsx";
import {UsersPage} from "../pages/usersPage.tsx";
import {PostsPage} from "../pages/postsPage.tsx";
import {UserDetailsPage} from "../pages/UserDetailsPage.tsx";
import {UserPostPage} from "../pages/UserPostPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: 'users', element: <UsersPage/>, children: [
                    {
                        path: 'details', element: <UserDetailsPage/>, children: [
                            {
                                path: 'user', element: <UserPostPage/>}
                        ]
                    },
                ]
            },
            {path: 'posts', element: <PostsPage/>},
        ]
    }
])