
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../../../validators/user.validator.ts";
import {saveUser} from "../../../services/user.service.ts";
import {IUser} from "../../../models/IUser.ts";

interface IFormProps {
    name: string,
    email: string,
    id: number,
}

const ValidateFormWithJoi = () => {
    const {handleSubmit, register, formState: {errors, isValid}}
        = useForm<IFormProps>({mode:"all", resolver:joiResolver(userValidator)})

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps)
        saveUser<IUser>(formDataProps).then(data => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label><input type="text" {...register('name')}/>
                    {errors.name && <div>{errors.name.message}</div>}
                </label>

                <label><input type="text" {...register('email')}/>
                    {errors.email && <div>{errors.email.message}</div>}
                </label>

                <label><input type="number" {...register('id')}/>
                    {errors.id && <div>{errors.id.message}</div>}
                </label>

                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default ValidateFormWithJoi;