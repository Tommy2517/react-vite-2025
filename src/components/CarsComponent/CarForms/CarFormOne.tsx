import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {idCarValidator} from "../../../validators/id.car.validator.ts";
import {useState} from "react";
import CarComponent from "../CarComponent.tsx";
import {getCarById} from "../../../services/car.service.ts";
import './CarFormStyles.css'

const CarFormOne = () => {
    const [car, setCar] = useState<ICar | null>(null)
    const [error, setError] = useState<string>('')
    const {handleSubmit, register, formState: {isValid, errors}}
        = useForm<{ id: number }>({mode: "all", resolver: joiResolver(idCarValidator)});

    const submitHandler = (data: { id: number }) => {
        setCar(null)
        setError(null)
        getCarById(data.id).then((car: ICar) => setCar(car))
            .catch(e =>
                e.response && e.response.status === 404 ?
                    setError("Car not found")
                    : setError(e.message || "Something went wrong")
    )
        // console.log(register)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <label>
                    <input type="number"{...register("id")}/>
                    {errors.id && <div>{errors.id.message}</div>}
                </label>
                <button disabled={!isValid}>Show</button>
            </form>
            {car ? <CarComponent car={car}/> : error}
        </div>
    );
};

export default CarFormOne;