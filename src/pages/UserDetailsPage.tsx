import {Outlet} from "react-router-dom";
import UserDetailsComponent from "../components/UsersComponent/UserDetailsComponent.tsx";
import {UserPostPage} from "./UserPostPage.tsx";

export const UserDetailsPage = () => {
    return (
        <div className={'flex'}>
            <UserDetailsComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};