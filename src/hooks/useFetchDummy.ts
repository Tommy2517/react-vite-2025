import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";


const useFetchDummy = <T, >(path, selector, loadAction, id) => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(selector)
    useEffect(() => {
        // console.log(data.length)
        if (!data || !data.length) {
            console.log('reload')
                    dispatch(loadAction(id && id))
        }
    }, [])
};

export default useFetchDummy