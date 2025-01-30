import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";


const useFetchDummy = <T, >(path, selector, loadAction) => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(selector)
    useEffect(() => {
        if (!data.length) {
            console.log('reload')
                    dispatch(loadAction())
        }
    }, [])
};

export default useFetchDummy