import {useEffect, useState} from "react";
import {getDummyData} from "../services/api.services.ts";

const UseDummyResponse = <T>(params:string) => {
    const [data, setData] = useState<T>(null)

    useEffect(() => {
        getDummyData<T>(params).then(res => setData(res))
    }, [])
    return {data}
};

export default UseDummyResponse;