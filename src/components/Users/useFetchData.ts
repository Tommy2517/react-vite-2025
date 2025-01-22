import {useEffect, useState} from "react";
import {IReqResData} from "../../models/IResReq.ts";
import {AppRoutes} from "../../routes/constants.ts";
import {getAll} from "../../api.services.ts";
import {useSearchParams} from "react-router-dom";

export const useFetchData =()=>{
    const [query] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IReqResData | null>(null);
    useEffect(()=>{
        const page = query.get('page');
        getAll<IReqResData>(AppRoutes.users + '?page='+page)
            .then(res => setUsers(res))
    },[query])
    return {users}
}