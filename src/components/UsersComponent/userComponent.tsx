import {IUser} from "../../models/IUser.ts";
import {FC} from "react";
type PropUserType = {
    user:IUser
}
export const UserComponent:FC<PropUserType> = ({user}) => {
    return <div>
        {user.firstName}
    </div>;
}