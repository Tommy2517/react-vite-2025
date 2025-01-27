import axios from "axios";
import {AppRoutes} from "../routes/constants.ts";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
})

export const getAllCars = async <T>(): Promise<T> => {
    const {data} = await axiosInstance.get<T>('/cars');
    return data
}
export const getCarById = async <T>(id: number): Promise<T> => {
    const {data} = await axiosInstance.get<T>('/cars/' + id);
    return data
}

export const createCar = async <T>(formData: ICar): Promise<T> => {
    const {data} = await axiosInstance.post(AppRoutes.cars, formData)
    return data
}
