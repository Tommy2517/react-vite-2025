import {useEffect, useState} from 'react';
import {getTodoDataPlaceholder} from "../../../../services/api.service.ts";
import {IPlaceholderTodo} from "../../../../models/IPlaceholderTodo.ts";
import PlaceholderComponent from "../TodoComponent/PlaceholderComponent.tsx";

const PlaceholderComponents = () => {
    const [todos, setTodos] = useState<IPlaceholderTodo[] | null>(null)

    useEffect(()=>{
        getTodoDataPlaceholder()
            .then(response => setTodos(response))
    },[])
    if(!todos) return <div>loaging...</div>

    return (
        <div className={'flex flex-wrap gap-4 p-6 justify-center text-lg font-serif'}>
            {todos.map(item => <PlaceholderComponent key={item.id} todo={item}/>)}
        </div>
    );
};

export default PlaceholderComponents;