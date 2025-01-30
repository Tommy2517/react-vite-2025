import {useEffect, useState} from "react";
import {getAll} from "../services/api.service.ts";
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector, userSlice} from "../main.tsx";
import users from "../components/users-component/Users.tsx";


const useFetchDummy = <T, >(path, selector, loadAction) => {
    const dispatch = useDispatch();
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