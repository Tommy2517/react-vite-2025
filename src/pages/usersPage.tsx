import {UsersComponent} from "../components/UsersComponent/usersComponent.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    return <div className={'flex'}>
        <UsersComponent/>
        <hr/>
        <Outlet/>
    </div>;
}