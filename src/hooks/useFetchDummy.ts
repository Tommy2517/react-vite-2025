import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {userService} from "../services/api.services.ts";

export const useFetchDummy = () => {
    const [users, setUser] = useState<IUser[]>([])

    useEffect(() => {
        userService.getUsers()
            .then(({users})=> setUser(users))
    },[])
    return {users}
}