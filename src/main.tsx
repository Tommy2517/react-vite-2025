import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/router.tsx";
import {Provider, useSelector} from "react-redux";
import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "./models/IUser.ts";
import {IPost} from "./models/IPost.ts";
/////////////////////////////////////////////////////////////////////
type PostSliceType = {
    posts: IPost[]
}

const postsInitialState: PostSliceType = {posts: []}
export const postSlice = createSlice({
    name:'postSlice',
    initialState:postsInitialState,
    reducers:{
        loadPosts: (state,action:PayloadAction<IPost[]>) =>{
            state.posts = action.payload
        }
    }
})
/////////////////////////////////////////////////////////////////////

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
/////////////////////////////////////////////////////////////////////

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
});

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>
)
