import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {useAppSelector, userSlice} from "../../main.tsx";
import useFetchDummy from "../../hooks/useFetchDummy.ts";
import {IUser} from "../../models/IUser.ts";
import User from "./User.tsx";

const Users = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice)

    useFetchDummy<IBaseResponseModel & { users: IUser[] }>(
        'users',
        (state) => state.userSlice.users,
        userSlice.actions.loadUsers
    )
    return (
        <div>
            {users.map((user: IUser) => <User key={user.id} user={user}/>)}
        </div>
    );
};
export default Users;
