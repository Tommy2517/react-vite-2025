import {IUser} from "../../models/IUser.ts";
import {FC} from "react";

type userPropType = {
    user:IUser
}
const User:FC<userPropType> = ({user}) => {
    return (
        <div className={'flex justify-center items-center flex-col'}>
            <div>{user.firstName}</div>
            <img src={user.image} alt={user.firstName}/>
        </div>
    );
};

export default User;