import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type Prop = {
    user:IUser
}
const User:FC<Prop> = ({user}) => {
    return (
        <div className={'border-2'}>
            {user.first_name}
        </div>
    );
};

export default User;