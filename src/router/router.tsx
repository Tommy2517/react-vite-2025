import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/mainLayout.tsx";
import {UsersPage} from "../pages/usersPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {path:'users', element:<UsersPage/>}
        ]
    }
])