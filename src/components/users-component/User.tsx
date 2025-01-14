import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type UserPropType = {
    user:IUser
}
const User:FC<UserPropType> = ({user}) => {
    return (
        <div className={'bg-blue-500 w-1/2 m-5 p-2 text-center'}>
            {user.email}
        </div>
    );
};

export default User;