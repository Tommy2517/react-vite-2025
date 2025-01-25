import {useRoutes} from "react-router-dom";
import {AppRoutes} from "./constants.ts";
import {lazy, Suspense} from "react";
import PaginationPage from "../pages/PaginationPage.tsx";

const Home = lazy(() => import('../pages/HomePage.tsx'))
const Users = lazy(() => import('../pages/UsersPage.tsx'))
const RoutesComponent = () =>
    useRoutes([
        {
            element: (
                <Suspense>
                    <Home/>
                </Suspense>
            ),
            path: AppRoutes.root,
            children:[
                {
                    element:<PaginationPage/>,
                    path:'',
                    children:[
                        {
                            element: (
                                <Suspense>
                                    <Users/>
                                </Suspense>
                            ),
                            path: AppRoutes.users
                        }
                    ]
                },

            ]
        },
        {
            path:'*',element:<div>404</div>
        }
    ]);

export default RoutesComponent;