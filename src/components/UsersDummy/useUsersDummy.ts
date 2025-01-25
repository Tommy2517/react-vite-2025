import {useSearchParams} from "react-router-dom";
import {useFetchData} from "../../hooks/useFetchData.ts";
import {IResDummy} from "../../models/IResDummy.ts";
import {IUserDummy} from "../../models/IUserDummy.ts";
import {useEffect} from "react";

const UseUsersDummy = (setTotalPages) => {
    const [query] = useSearchParams({page: '1'});
    const limit = 30
    const skip = limit * (+query.get('page')) - limit

    const {response, loading, error} = useFetchData<IResDummy & {users:IUserDummy[]}>(
        import.meta.env.VITE_DUMMY_API_URL,'/users' + '?skip=', skip)

    useEffect(() => {
        if(response) setTotalPages(Math.ceil(response.total / limit))

    },[response])
    return {
        users: response?.users || [],
        loading,
        error
    }
};

export default UseUsersDummy;