import {useEffect, useState} from "react";
import {IReqResData} from "../../models/IResReq.ts";
import {getAll} from "../../api.services.ts";

export const useFetchData = <T>(url, path,query) => {
    const [response, setResponse] = useState<T | null>(null);

    useEffect(() => {
        getAll<T>(url,path + query)
            .then(res => setResponse(res))
    }, [query])
    return {response}
}