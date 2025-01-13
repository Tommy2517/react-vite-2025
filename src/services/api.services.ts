import {urls} from "../constants/urls.ts";
import {IDummyResponseModel} from "../models/IDummyResponseModel.ts";
import {IUser} from "../models/IUser.ts";
import {ICart} from "../models/ICarts.ts";

export const userService = {
    getUsers: async (): Promise<IDummyResponseModel & { users: IUser[] }> => {
        return await fetch(urls.users.allUsers)
            .then(res => res.json())
    },
    getCart: async (id:string): Promise<IDummyResponseModel & { carts: ICart[] }> => {
        return await fetch('https://dummyjson.com/carts/user/' + id)
            .then(res => res.json())
    }
}
