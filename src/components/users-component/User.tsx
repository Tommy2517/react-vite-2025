import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type UserPropType = {
    user:IUser
}
const User:FC<UserPropType> = ({user}) => {
    return (
        <div>
            {user.email}
        </div>
    );
};

export default User;