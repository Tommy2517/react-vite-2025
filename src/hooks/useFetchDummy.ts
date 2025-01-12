import {useEffect, useState} from "react";
import {getAll} from "../services/api.service.ts";
import {IBaseResponseModel} from "../models/IBaseResponseModel.ts";
import {IUser} from "../models/IUser.ts";
import {IPost} from "../models/IPost.ts";

export const useFetchDummy = (path) => {
    const [users, setUsers] = useState<IUser[]>([])
    const [posts, setPosts] = useState<IPost[]>([])

    if (path === 'users') {
        useEffect(() => {
            getAll<IBaseResponseModel & { users: IUser[] }>(path)
                .then(({users}) => setUsers(users))
        }, [])
        return {users}
    }

    if (path === 'posts') {
        useEffect(() => {
            getAll<IBaseResponseModel & { posts: IPost[] }>(path)
                .then(({posts}) => setPosts(posts))
        }, [])
        return {posts}
    }
};

//