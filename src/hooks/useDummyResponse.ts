import {useEffect, useState} from "react";
import {urls} from "../constants/urls.ts";
import {getDummyData} from "../services/api.services.ts";

const UseDummyResponse = <T>(params:string):Promise<T> => {
    const [data, setData] = useState<T | null>(null)

    useEffect(() => {
        getDummyData<T>(params).then(res => setData(res))
    }, [])
    return {data}
};

export default UseDummyResponse;