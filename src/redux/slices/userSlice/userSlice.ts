import {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../../services/api.service.ts";
import {IBaseResponseModel} from "../../../models/IBaseResponseModel.ts";

type UserSliceType = {
    users: IUser[]
}
const usersInitialState: UserSliceType = {users: []}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await getAll<IBaseResponseModel & { users: IUser[] }>('users')
                .then(({users}) => users)
            //             dispatch(loadAction(data[path]))
            // throw new Error()
            return thunkAPI.fulfillWithValue(users)
        }catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('SomeError')
        }
    }
)
export const userSlice = createSlice({
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state:UserSliceType, action: PayloadAction<IUser[]>) => {
                state.users = action.payload
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state)
                console.log(action)
            }),
    initialState: usersInitialState,
    name: "userSlice",
    reducers: {
        loadUsers: (state, action) => {
            // state.users = action.payload
        }
    }
});

export const userSliceActions = {
    ...userSlice.actions, loadUsers
}