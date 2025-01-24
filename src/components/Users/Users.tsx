import User from "./User.tsx";
import {useFetchData} from "./useFetchData.ts";
import PaginationButtons from "../pagination/paginationButton.tsx";
import {AppRoutes} from "../../routes/constants.ts";
import {useSearchParams} from "react-router-dom";

const Users = () => {
    const [query] = useSearchParams({page: '1'});
    const {response} = useFetchData(AppRoutes.users + AppRoutes.page, query.get('page') || '1')

    if (!response) return <div>loading</div>

    return (
        <div>
            {response && response.data.map(user => <User key={user.id} user={user}/>)}
            <PaginationButtons total_pages={response.total_pages}/>
        </div>
    );
};

export default Users;