import {useEffect, useState} from "react";
import {getAll} from "../services/api.secrvice.ts";
import {AppRoutes} from "../router/constants.ts";
import {skipUtil, totalPagesUtil} from "../utils/QueryUtils.ts";
import {useSearchParams} from "react-router-dom";

export const useDummyFetch = <T,>(setTotalPages) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [query] = useSearchParams({page:'1'})

    useEffect(() => {
        setLoading(true)
        getAll<T>(import.meta.env.VITE_URL_DUMMY, AppRoutes.users + skipUtil(query.get('page')))
            .then(data => {
                setData(data)
                setTotalPages(totalPagesUtil(data.total))
            })
            .finally(() => setLoading(false))
            .catch(e => setError(e.message))
        return () => {
            setData(null);
            setLoading(false)
        }
    }, [query])
    // useEffect(() => {
    //     if (data) setTotalPages(totalPagesUtil(data.total))
    // }, [data]);
    return {
        users: (data as T)?.users || [],
        loading,
        error
    }
}