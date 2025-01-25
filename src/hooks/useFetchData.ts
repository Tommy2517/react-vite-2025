import {useEffect, useState} from "react";
import {IReqResData} from "../models/IResReq.ts";
import {getAll} from "../api.services.ts";
import {createLogger} from "vite";

export const useFetchData = <T>(url, path,query) => {
    const [response, setResponse] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true);
        getAll<T>(url,path + query)
            .then(res => setResponse(res))
            .finally(()=> setLoading(false))
            .catch((e) => setError(e.message))
        return () => {
            setResponse(null);
            setLoading(false);
        }
    }, [query])
    return {response, loading, error}
}