import {useParams} from "react-router";
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import useFetchDummy from "../hooks/useFetchDummy.ts";
import {IUser} from "../models/IUser.ts";

const OneUserPage = () => {
    const {id} = useParams();
    const {user, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    const location = (q) =>{
        dispatch(q(id))
    }


    // useFetchDummy<IUser>(
    //     'users/'+id,
    //     (state) => state.userSlice.state,
    //     userSliceActions.loadUser,
    //     id
    // )


    useEffect(() => {
        if (id && !user) location(userSliceActions.loadUser)
    }, [id])

    return (
        <div>
            {!loadState && <div>Loading</div>}
            {user && <div>{user.id} {user.firstName}</div>}

        </div>
    );
};

export default OneUserPage;