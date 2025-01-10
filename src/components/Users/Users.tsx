import {useState} from "react";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "./UserComponent.tsx";
import {userService} from "../../services/api.services.ts";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])
    userService.getUsers().then(data => setUsers(data))

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;