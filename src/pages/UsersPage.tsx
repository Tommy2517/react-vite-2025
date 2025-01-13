import Users from "../components/Users/Users.tsx";
import {Outlet} from "react-router";

const UsersPage = () => {
    return (
        <div className={'flex'}>
            <Users/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;