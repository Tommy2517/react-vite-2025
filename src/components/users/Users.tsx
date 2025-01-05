import {useEffect, useState} from 'react';
import {IUser} from "../../models/users/IUser.ts";
import User from "./User.tsx";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response => setUsers(response))
        return () => {
            console.log('done')
        }
    }, [])

    console.log('wqe')
    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;