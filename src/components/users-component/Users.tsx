import {IUser} from "../../models/IUser.ts";
import User from "./User.tsx";
import useFetchDummy from "../../hooks/useFetchDummy.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../main.tsx";
import {useEffect} from "react";
import {getAll} from "../../services/api.service.ts";


const Users = () => {
    const {data} = useFetchDummy<IBaseResponseModel & { users: IUser[] }>('users')
    const {users} = useAppSelector(({userSlice}) => userSlice)
    const dispatch = useDispatch();

    useEffect(() => {
        getAll<IBaseResponseModel & { users: IUser[] }>('users')
            .then((data) => {
                const {users} = data
                dispatch(userSlice)
            })
    }, [])

    console.log(users)


    return (
        <div>
            {data?.users.map((user: IUser) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;
