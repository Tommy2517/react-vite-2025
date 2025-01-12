import Post from "./Post.tsx";
import {useFetchDummy} from "../../hooks/useFetchDummy.ts";

const Posts = () => {
    const {posts} = useFetchDummy('posts')
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};
export default Posts;
