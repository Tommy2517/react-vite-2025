import {IUser} from "../../../models/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserSliceType = {
    users: IUser[]
}
const usersInitialState: UserSliceType = {users: []}
export const userSlice = createSlice({
    name: "userSlice",
    initialState: usersInitialState,
    reducers: {
        loadUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        }
    }
});
