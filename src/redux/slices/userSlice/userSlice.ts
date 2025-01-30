import {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../../services/api.service.ts";
import {IBaseResponseModel} from "../../../models/IBaseResponseModel.ts";

type UserSliceType = {
    users: IUser[],
    user: IUser | null
}
const usersInitialState: UserSliceType = {users: [], user: null}

const loadUsers = createAsyncThunk(
    'usersSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await getAll<IBaseResponseModel & { users: IUser[] }>('users')
                .then(({users}) => users)
            //             dispatch(loadAction(data[path]))
            // throw new Error()
            return thunkAPI.fulfillWithValue(users)
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('SomeError')
        }
    }
)

const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id: string, thunkAPI) => {
        try {
            const user = await getAll<IUser>('users/' + id)
                .then(user => user)
            //             dispatch(loadAction(data[path]))
            // throw new Error()
            return thunkAPI.fulfillWithValue(user)
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('SomeError')
        }
    }
)
export const userSlice = createSlice({
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state: UserSliceType, action: PayloadAction<IUser[]>) => {
                state.users = action.payload
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state)
                console.log(action)
            })
            .addCase(loadUser.fulfilled, (state: UserSliceType, action: PayloadAction<IUser>) => {
                state.user = action.payload
            })
            .addCase(loadUser.rejected, (state, action) => {
                console.log(state)
                console.log(action)
            }),
    initialState: usersInitialState,
    name: "userSlice",
    reducers: {
        loadUser: (state, action) => {
            // state.users = action.payload
        }
    }
});

export const userSliceActions = {
    ...userSlice.actions, loadUsers, loadUser
}