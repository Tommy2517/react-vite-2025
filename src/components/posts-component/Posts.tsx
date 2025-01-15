import Post from "./Post.tsx";
import useFetchDummy from "../../hooks/useFetchDummy.ts";
import {IPost} from "../../models/IPost.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";

const Posts = () => {
    const {data} = useFetchDummy<IBaseResponseModel & { posts: IPost[] }>('posts')

    return (
        <div>
            {data?.posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};
export default Posts;
