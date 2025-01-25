import {getAll} from "../../services/api.secrvice.ts";
import {useEffect, useState} from "react";
import {IDummyRes} from "../../models/IDummyRes.ts";
import {useDummyFetch} from "../../hooks/useDummyFetch.ts";

const Users = () => {
    // const [data, setData] = useState<any | []>([])
    // useEffect(() => {
    //     getAll(import.meta.env.VITE_URL_DUMMY, '/users')
    //         .then(data => setData(data))
    // }, [])
    const {users, loading, error} = useDummyFetch<IDummyRes>()
    if (!users) return <div>wait</div>
    return (
        <div>
            {users?.map(user => <div key={user.id}>{user.firstName}</div>)}
        </div>
    );
};

export default Users;