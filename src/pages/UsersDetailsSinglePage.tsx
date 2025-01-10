import {useLocation} from "react-router-dom";
import {IUser} from "../models/IUser.ts";

const UsersDetailsSinglePage = () => {
    const {state} = useLocation()
    const user   = state as IUser
    return (
        <div>
            {user.company.name}
        </div>
    );
};

export default UsersDetailsSinglePage;