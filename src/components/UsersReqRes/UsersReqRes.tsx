import UserReqRes from "./UserReqRes.tsx";
import {useFetchData} from "../../hooks/useFetchData.ts";
import PaginationButtons from "../pagination/paginationButton.tsx";
import {AppRoutes} from "../../routes/constants.ts";
import {useSearchParams, useOutletContext} from "react-router-dom";
import {IReqResData} from "../../models/IResReq.ts";

const UsersReqRes = () => {
    const [query] = useSearchParams({page: '1'});
    const {response} = useFetchData<IReqResData>(import.meta.env.VITE_REQRES_API_URL,'/users' + AppRoutes.page, query.get('page') || '1')
    const {setTotalPages} = useOutletContext<{ setTotalPages: (pages: number) => void }>(); // Получаем setTotalPages

    if (!response) return <div>loading</div>
    if (response) setTotalPages(response.total_pages)
    return (
        <div>
            {response && response.data.map(user => <UserReqRes key={user.id} user={user}/>)}
            <PaginationButtons total_pages={response.total_pages}/>
        </div>
    );
};

export default UsersReqRes;