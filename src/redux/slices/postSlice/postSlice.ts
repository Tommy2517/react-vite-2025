import {IPost} from "../../../models/IPost.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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