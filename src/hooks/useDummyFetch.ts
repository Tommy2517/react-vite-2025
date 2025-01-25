import {useEffect, useState} from "react";
import {getAll} from "../services/api.secrvice.ts";
import {AppRoutes} from "../router/constants.ts";

export const useDummyFetch = <T,>(setTotalPages) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        getAll<T>(import.meta.env.VITE_URL_DUMMY, AppRoutes.users + '')
            .then(data => setData(data))
            .finally(() => setLoading(false))
            .catch(e => setError(e.message))
        return () => {
            setData(null);
            setLoading(false)
        }
    }, [])
    useEffect(() => {
        if (data) setTotalPages(data.total)
    }, [data]);
    return {
        users: (data as T)?.users || [],
        loading,
        error
    }
}