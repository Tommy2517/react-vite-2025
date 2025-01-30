import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import useFetchDummy from "../../hooks/useFetchDummy.ts";
import {IUser} from "../../models/IUser.ts";
import User from "./User.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {userSliceActions} from "../../redux/slices/userSlice/userSlice.ts";

const Users = () => {
    const {users, loadState} = useAppSelector(({userSlice}) => userSlice)

    useFetchDummy<IBaseResponseModel & { users: IUser[] }>(
        'users',
        (state) => state.userSlice.users,
        userSliceActions.loadUsers
    )
    return (
        <div>
            {!loadState && <div>Loading</div>}

            {users.map((user: IUser) => <User key={user.id} user={user}/>)}
        </div>
    );
};
export default Users;
