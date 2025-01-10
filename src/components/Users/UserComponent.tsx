import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type UserPropType = {
    user:IUser
}
const UserComponent:FC<UserPropType> = ({user}) => {
    return (
        <div>
            <div>{user.name}</div>
            <button>details</button>
        </div>
    );
};

export default UserComponent;