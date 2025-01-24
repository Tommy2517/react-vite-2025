import {IUserDummy} from "../../models/IUserDummy.ts";
import {FC} from "react";

type PropsType = {
    user:IUserDummy
}
const UserDummy:FC<PropsType> = ({user}) => {
    return (
        <div>
            {user.id}-
            {user.firstName}
        </div>
    );
};

export default UserDummy;