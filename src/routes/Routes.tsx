import {lazy, Suspense} from 'react';
import {useRoutes} from "react-router-dom";
import {AppRoutes} from "./constants.ts";

const Home = lazy(() => import('../pages/HomePage.tsx'))
const Users = lazy(() => import('../pages/UsersPage.tsx'))
const Pagination = lazy(() => import('../pages/Pagination.tsx'))

const RoutesComponent = () =>
    useRoutes([
        {
            element: (
                <Suspense>
                    <Home/>
                </Suspense>
            ),
            path: AppRoutes.root,
            children: [
                {
                    path: '',
                    element: (
                        <Suspense>
                            <Pagination/>
                        </Suspense>
                    ),
                    children:[
                        {
                            path: AppRoutes.users,
                            element: (
                                <Suspense>
                                    <Users/>
                                </Suspense>
                            ),
                        },
                    ]
                },
            ]
        },

        {
            path: '*', element: <div>404 | not found</div>
        }
    ])

export default RoutesComponent;