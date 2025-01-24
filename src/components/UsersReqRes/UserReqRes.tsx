import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type Prop = {
    user:IUser
}
const UserReqRes:FC<Prop> = ({user}) => {
    return (
        <div className={'border-2'}>
            <div>{user.first_name}</div>
            <img src={user.avatar} alt={user.first_name}/>
        </div>
    );
};

export default UserReqRes;