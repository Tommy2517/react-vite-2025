import {FormEvent, useState} from "react";

interface IFormProps {
    username: string,
    password: string,
}
const ControlFormComponent = () => {

    const [formState, setFormState] = useState<IFormProps>(
        {
            username:'name',
            password: 'pass'
        }
    )
    const handleSubmitForm = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            username: formState.username,
            password: formState.password,
        }
        console.log(user)
    }

    // const onChangeHandlerName = (e:FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement
    //     console.log(input.value)
    //     setFormState({...formState, username: input.value})
    // }
    // const onChangeHandlerPass = (e:FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement
    //     console.log(input.value)
    //     setFormState({...formState, password: input.value})
    // }

    const handleInputChange = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement ;
        console.log(input.value)
        setFormState({...formState, [input.name]:input.value})
    };
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input
                    type="text"
                    name={'username'}
                    value={formState.username}
                    onChange={handleInputChange}/>
                <input
                    type="text"
                    name={'password'}
                    value={formState.password}
                    onChange={handleInputChange}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default ControlFormComponent;