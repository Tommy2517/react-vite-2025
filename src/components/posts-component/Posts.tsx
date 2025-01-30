import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {useAppSelector, postSlice} from "../../main.tsx";
import useFetchDummy from "../../hooks/useFetchDummy.ts";
import {IPost} from "../../models/IPost.ts";
import Post from "./Post.tsx";

const Posts = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice)

    useFetchDummy<IBaseResponseModel & { posts: IPost[] }>(
        'posts',
        (state) => state.postSlice.posts,
        postSlice.actions.loadPosts
    )
    return (
        <div>
            {posts.map((post: IPost) => <Post key={post.id} post={post}/>)}
        </div>
    );
};
export default Posts;
