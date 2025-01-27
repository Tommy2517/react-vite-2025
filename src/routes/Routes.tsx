import {useRoutes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {AppRoutes} from "./constants.ts";

const Home = lazy(() => import('../pages/HomePage'))
const Cars = lazy(() => import('../pages/CarsPage'))
const CarForm = lazy(() => import('../pages/CarFormPage'))
export const RoutersComponent = () =>
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
                    element: (
                        <Suspense>
                            <Cars/>
                        </Suspense>
                    ),
                    path: AppRoutes.cars
                },
                {
                    element: (
                        <Suspense>
                            <CarForm/>
                        </Suspense>
                    ),
                    path: AppRoutes.carForm
                }
            ]
        }
    ])
