import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import useFetchDummy from "../../hooks/useFetchDummy.ts";
import {IUser} from "../../models/IUser.ts";
import User from "./User.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {userSlice} from "../../redux/slices/userSlice/userSlice.ts";

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
