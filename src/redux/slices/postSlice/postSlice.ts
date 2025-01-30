import {IPost} from "../../../models/IPost.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../../services/api.service.ts";
import {IBaseResponseModel} from "../../../models/IBaseResponseModel.ts";

type PostSliceType = {
    posts: IPost[]
}
const postsInitialState: PostSliceType = {posts: []}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await getAll<IBaseResponseModel & { posts:IPost[] }>('posts')
                .then(data => data.posts)
            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            return thunkAPI.rejectWithValue('error - ' + e.message)

        }
    }
)
export const postSlice = createSlice({
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state:PostSliceType, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected, (state, action) => {
                console.log(state)
                console.log(action)
            }),
    name: 'postSlice',
    initialState: postsInitialState,
    reducers: {
        loadPosts: (state, action: PayloadAction<IPost[]>) => {
            // state.posts = action.payload
        }
    }
})
 export const postSliceActions = {
    ...postSlice.actions, loadPosts
 }