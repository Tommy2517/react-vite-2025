import {IDummyRes} from "../../models/IDummyRes.ts";
import {useDummyFetch} from "../../hooks/useDummyFetch.ts";
import {useOutletContext} from "react-router-dom";

const Users = () => {
    const {setTotalPages} = useOutletContext();
    const {users, loading, error} = useDummyFetch<IDummyRes>(setTotalPages)
    if (loading) return <div>loading...</div>
    if (error) return <div>{error}</div>
    return (
        <div>
            {users.map(user => <div key={user.id}>{user.firstName}</div>)}
        </div>
    );
};

export default Users;