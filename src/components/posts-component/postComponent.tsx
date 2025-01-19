import {IPost} from "../../models/IPost.ts";
import {FC} from "react";

type propPostDummy = {
    post:IPost
}
const PostComponent:FC<propPostDummy> = ({post}) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export default PostComponent;