import User from "./User.tsx";
import {useFetchDummy} from "../../hooks/useFetchDummy.ts";

const Users = () => {
const {users} = useFetchDummy()
    return (
        <div>
            {users.map((user) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;