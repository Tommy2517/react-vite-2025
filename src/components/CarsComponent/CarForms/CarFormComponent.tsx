import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import "./CarFormStyles.css"
import {createCarValidator} from "../../../validators/create.car.validator.ts";
import {createCar} from "../../../services/car.service.ts";

const CarFormComponent = () => {
    const {handleSubmit, register, formState: {isValid, errors}}
        = useForm<ICar>({mode: "all", resolver: joiResolver(createCarValidator)});
    const submitHandler = (formDataProps: ICar) => {
        createCar<ICar>(formDataProps).then(data => console.log(data))
    }

    return (
        <div className={'flex justify-center'}>
            <form onSubmit={handleSubmit(submitHandler)} >
                <label><input type="text"{...register("brand")}/>{errors.brand && <div>{errors.brand.message}</div>}</label>
                <label><input type="number" {...register("price")}/>{errors.price && <div>{errors.price.message}</div>}</label>
                <label><input type="number" {...register("year")}/>{errors.year && <div>{errors.year.message}</div>}</label>
                <button disabled={!isValid}>create</button>
            </form>
        </div>
    );
};

export default CarFormComponent;