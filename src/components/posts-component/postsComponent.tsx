import useDummyResponse from "../../hooks/useDummyResponse.ts";
import {IDummyResponse} from "../../models/IDummyResponse.ts";
import {IPost} from "../../models/IPost.ts";
import PostComponent from "./postComponent.tsx";

export const PostsComponent = () => {
    const {data} = useDummyResponse<IDummyResponse & {posts:IPost[]}>('/posts')
    return (
        <div>
            {data?.posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};
