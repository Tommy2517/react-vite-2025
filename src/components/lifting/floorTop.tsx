import {useState} from 'react';
import {getUsers} from "../../services/api.service.ts";
import {IUser} from "../../models/users/IUser.ts";
import FloorBottom from "./floorBottom.tsx";

const FloorTop = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [user, setUser] = useState<IUser | null>(null)
    getUsers()
        .then((response) => setUsers(response))
    const elevator = (item:IUser) =>{
        setUser(item)
    }
    return (
        <div>
            {user && <h2>{user.id}</h2>}
            {users.map(user => <FloorBottom key={user.id} item={user} elevator={elevator}/>
            )}
        </div>
    );
};

export default FloorTop;