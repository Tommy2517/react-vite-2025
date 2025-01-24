import {useOutletContext, useSearchParams} from "react-router-dom";
import {useFetchData} from "../UsersReqRes/useFetchData.ts";
import {IResDummy} from "../../models/IResDummy.ts";
import {IUserDummy} from "../../models/IUserDummy.ts";
import UserDummy from "./UserDummy.tsx";
import {useEffect} from "react";

const UsersDummy = () => {
    const {setTotalPages} = useOutletContext<{ setTotalPages: (pages: number) => void }>(); // Получаем setTotalPages

    const [query] = useSearchParams({page: '1'});
    const limit = 30
    const skip = limit * (+query.get('page')) - limit

    const {response} = useFetchData<IResDummy & {users:IUserDummy[]}>(import.meta.env.VITE_DUMMY_API_URL,'/users' + '?skip=', skip)

    useEffect(() => {
    if(response) setTotalPages(Math.ceil(response?.total / limit))

    },[response])

    if (!response) return <div>loading</div>

    return (
        <div>
            {response && response.users.map(user => <UserDummy key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersDummy;