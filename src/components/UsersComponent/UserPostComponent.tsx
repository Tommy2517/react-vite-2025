import {IPost} from "../../models/IPost.ts";
import {useLocation} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";
import useDummyResponse from "../../hooks/useDummyResponse.ts";
import {IDummyResponse} from "../../models/IDummyResponse.ts";

export const UserPostComponent = () => {
    const {state} = useLocation();
    const user = state as IUser
    const {data} = useDummyResponse<IDummyResponse & { posts: IPost[] }>(`/posts/user/${user.id}`)
    return (
        <div>
            {
               data?.posts.map((post) => (
                    <div key={post.id}>
                        {post.id}
                        {post.title}
                    </div>
                ))
            }
        </div>
    );
};