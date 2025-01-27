import {useEffect, useState} from "react";
import {getAllCars} from "../../services/car.service.ts";

export const useCarsList = <T>() => {
    const [cars, setCars] = useState<T | []>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        setLoading(true);
        getAllCars<T>()
            .then(cars => setCars(cars))
            .finally(() => setLoading(false))
            .catch(err => setError(err.message));
        return () => {
            setCars(null);
            setLoading(false);
        }
    },[])
    return {cars, loading, error}
}