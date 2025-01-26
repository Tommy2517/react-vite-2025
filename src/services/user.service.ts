import axios, {request} from "axios";
import {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'},
})


axiosInstance.interceptors.request.use((request) => {
    console.log(request);
    request.headers.set('xxx','xxxx');
    console.log(request.method)
    return request
})

export const getAllUsers = async <T, >(): Promise<T> => {
    const {data} = await axiosInstance.get<T>('/users');
    console.log(data)
    return data
}

export const saveUser = async <T>(user:T):Promise<T> => {
    const {data} = await axiosInstance.post<T>('/users', user)
    console.log(data)
    return data
}

// fetch('YOURURL', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     key1: 'value1',
//     key2: 'value2',
//   })
// })