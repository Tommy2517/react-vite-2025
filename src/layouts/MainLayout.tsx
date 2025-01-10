import Menu from "../components/Menu/Menu.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;