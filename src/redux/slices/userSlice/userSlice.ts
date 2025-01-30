import {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../../services/api.service.ts";
import {IBaseResponseModel} from "../../../models/IBaseResponseModel.ts";

type UserSliceType = {
    users: IUser[],
    user: IUser | null,
    loadState: boolean
}
const usersInitialState: UserSliceType = {users: [], user: null, loadState:false}

const loadUsers = createAsyncThunk(
    'usersSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await getAll<IBaseResponseModel & { users: IUser[] }>('users')
                .then(({users}) => users)
            thunkAPI.dispatch(userSliceActions.changeLoadState(true))
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
            // thunkAPI.dispatch(userSliceActions.changeLoadState(true))

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
            })
            .addMatcher(isFulfilled(loadUser,loadUsers), (state:UserSliceType )=>{
                state.loadState = true
            })
            .addMatcher(isRejected(loadUser,loadUsers), (state)=>{
                console.log(state)
            }),
    initialState: usersInitialState,
    name: "userSlice",
    reducers: {
        changeLoadState: (state, action:PayloadAction<boolean>) => {
            state.loadState = action.payload
        }
    }
});

export const userSliceActions = {
    ...userSlice.actions, loadUsers, loadUser
}