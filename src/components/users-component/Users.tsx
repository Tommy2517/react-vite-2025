import {IUser} from "../../models/IUser.ts";
import User from "./User.tsx";
import useFetchDummy from "../../hooks/useFetchDummy.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";

const Users = () => {
    const {data} = useFetchDummy<IBaseResponseModel & { users: IUser[] }>('users')

    return (
        <div>
            {data?.users.map((user: IUser) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;
