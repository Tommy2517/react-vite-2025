import UserReqRes from "./UserReqRes.tsx";
import {useFetchData} from "./useFetchData.ts";
import PaginationButtons from "../pagination/paginationButton.tsx";
import {AppRoutes} from "../../routes/constants.ts";
import {useSearchParams} from "react-router-dom";
import {IReqResData} from "../../models/IResReq.ts";

const UsersReqRes = () => {
    const [query] = useSearchParams({page: '1'});
    const {response} = useFetchData<IReqResData>(import.meta.env.VITE_REQRES_API_URL,'/users' + AppRoutes.page, query.get('page') || '1')

    if (!response) return <div>loading</div>

    return (
        <div>
            {response && response.data.map(user => <UserReqRes key={user.id} user={user}/>)}
            <PaginationButtons total_pages={response.total_pages}/>
        </div>
    );
};

export default UsersReqRes;