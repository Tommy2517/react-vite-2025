import {useEffect, useState} from "react";
import {IReqResData} from "../../models/IResReq.ts";
import {getAll} from "../../api.services.ts";

export const useFetchData = (path,query) => {
    const [response, setResponse] = useState<IReqResData | null>(null);

    useEffect(() => {
        getAll<IReqResData>(path + query)
            .then(res => setResponse(res))
    }, [query])
    return {response}
}