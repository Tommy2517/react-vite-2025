import {FC} from 'react';
import {IUser} from "../../models/users/IUser.ts";
type UserPropType ={
    user:IUser;
}
const User:FC<UserPropType> = ({user}) => {
    return (
        <div>
            {user.name}
        </div>
    );
};

export default User;