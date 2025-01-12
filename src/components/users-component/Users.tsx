import {IUser} from "../../models/IUser.ts";
import User from "./User.tsx";
import {useFetchDummy} from "../../hooks/useFetchDummy.ts";
const Users = () => {
    const {users} = useFetchDummy('users')

    return (
        <div>
            {users.map((user: IUser) => <User key={user.id} user={user} />)}
        </div>
    );
};

export default Users;
