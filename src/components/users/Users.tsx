import {useEffect, useState} from 'react';
import {IUser} from "../../models/users/IUser.ts";
import User from "./User.tsx";
import {getUsers} from "../../services/api.service.ts";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        // 1 variant
        getUsers()
            .then(response => setUsers(response))

        // 2 variant
        // const fetchData = async ()=>{
        //     const users = await getUsers();
        //     setUsers(users)
        // }
        // fetchData()

        return () => {
            console.log('done')
        }
    }, [])

    console.log('load')
    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;