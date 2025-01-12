import {IPost} from "../../models/IPost.ts";
import {FC} from "react";

type PostPropType = {
  post:IPost
}
const Post:FC<PostPropType> = ({post}) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export default Post;