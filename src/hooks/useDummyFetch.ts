import {useEffect, useState} from "react";
import {getAll} from "../services/api.secrvice.ts";
import {AppRoutes} from "../router/constants.ts";

export const useDummyFetch = <T>() => {
    const [data, setData] = useState<T | []>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        setLoading(true)
        getAll(import.meta.env.VITE_URL_DUMMY, AppRoutes.users)
            .then(data => setData(data))
            .finally(() => setLoading(false))
            .catch(e => setError(e.message))
        return () => {
            setData(null);
            setLoading(false)
        }

    }, [])
    return {
        users: data?.users || [],
        loading,
        error
    }
}