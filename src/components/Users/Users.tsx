import User from "./User.tsx";
import {useFetchData} from "./useFetchData.ts";
import PaginationButtons from "../pagination/paginationButton.tsx";
import {AppRoutes} from "../../routes/constants.ts";

const Users = () => {
    const {users} = useFetchData(AppRoutes.users + AppRoutes.page)
    if (!users) return <div>loading</div>

    return (
        <div>
            {users && users.data.map(user => <User key={user.id} user={user}/>)}
            <PaginationButtons total_pages={users.total_pages}/>
        </div>
    );
};

export default Users;