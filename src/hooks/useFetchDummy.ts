import {useEffect} from "react";
import {getAll} from "../services/api.service.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";


const useFetchDummy = <T, >(path, selector, loadAction) => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(selector)
    useEffect(() => {
        if (!data.length) {
            console.log('reload')
            getAll<T>(path)
                .then(data => {
                    // setData(data)
                    dispatch(loadAction(data[path]))
                })
        }
    }, [])
};

export default useFetchDummy