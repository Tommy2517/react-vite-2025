import {useOutletContext} from "react-router-dom";
import UserDummy from "./UserDummy.tsx";
import useUsersDummy from "./useUsersDummy.ts";

const UsersDummy = () => {
    const {setTotalPages} = useOutletContext();
    const {users, loading, error} = useUsersDummy(setTotalPages)

    if (loading) return <div> loading...</div>
    if (error) return <div>{error}</div>

    return (
        <div>
            {users.map(user => <UserDummy key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersDummy;