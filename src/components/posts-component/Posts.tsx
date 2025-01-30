import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import useFetchDummy from "../../hooks/useFetchDummy.ts";
import {IPost} from "../../models/IPost.ts";
import Post from "./Post.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {postSliceActions} from "../../redux/slices/postSlice/postSlice.ts";

const Posts = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice)

    useFetchDummy<IBaseResponseModel & { posts: IPost[] }>(
        'posts',
        (state) => state.postSlice.posts,
        postSliceActions.loadPosts
    )
    return (
        <div>
            {posts.map((post: IPost) => <Post key={post.id} post={post}/>)}
        </div>
    );
};
export default Posts;
