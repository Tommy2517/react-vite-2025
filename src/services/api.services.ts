import {urls} from "../constants/urls.ts";

export const getDummyData = async <T>(params):Promise<T> => {
    return await fetch(urls.dummyRes + params)
        .then(res => res.json())

}