import {useEffect, useState} from "react";
import {getAll} from "../services/api.service.ts";


 const useFetchDummy = <T,>(path) => {
    const [data, setData] = useState<T | null>(null)

        useEffect(() => {
            getAll<T>(path)
                .then((data) => setData(data))
        }, [path])
        return {data}
};

export default useFetchDummy