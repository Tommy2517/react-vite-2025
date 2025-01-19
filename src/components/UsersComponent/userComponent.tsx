import {IUser} from "../../models/IUser.ts";
import {FC} from "react";
import {Link} from "react-router-dom";
type PropUserType = {
    user:IUser
}
export const UserComponent:FC<PropUserType> = ({user}) => {
    return <div>
        <Link to={'details'} state={user}>
            {user.firstName}
        </Link>
    </div>;
}