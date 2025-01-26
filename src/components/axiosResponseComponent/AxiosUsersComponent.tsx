import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../../services/user.service.ts";
import {IUser} from "../../models/IUser.ts";
import ValidateFormWithJoi from "../FormComponents/ValidateFormWithJoi/ValidateFormWithJoi.tsx";

const AxiosUsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(()=>{
        getAllUsers<IUser[]>().then(value => setUsers(value))
    },[])
    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
            <ValidateFormWithJoi/>
        </div>
    );
};

export default AxiosUsersComponent;