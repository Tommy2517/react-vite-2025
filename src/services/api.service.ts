import {IUser} from "../models/users/IUser.ts";

export const getUsers = async ():Promise<IUser[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json())
}