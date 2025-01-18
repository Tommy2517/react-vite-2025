import {Outlet} from "react-router-dom";
import {MenuPage} from "../pages/menuPage.tsx";

export const MainLayout = () => {
    return <div>
        <MenuPage/>
        <hr/>
        <Outlet/>
    </div>;
}