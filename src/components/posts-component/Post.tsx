import {IPost} from "../../models/IPost.ts";
import {FC} from "react";

type PostPropType = {
    post: IPost
}
const Post: FC<PostPropType> = ({post}) => {
    return (
        <div className={'bg-green-500 m-5 p-2 text-center'}>
            {post.title}
        </div>
    );
};

export default Post;