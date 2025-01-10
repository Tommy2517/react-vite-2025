import {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";

export const userService = {
    getUsers: async ():Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(res => res.json())
    }
}
