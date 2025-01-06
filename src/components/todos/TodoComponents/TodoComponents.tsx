import {useEffect, useState} from 'react';
import {getTodoDataPlaceholder} from "../../../services/api.service.ts";
import {ITodo} from "../../../models/ITodo.ts";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";

const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(()=>{
        getTodoDataPlaceholder()
            .then(response => setTodos(response))
    },[])

    return (
        <div className={'bg-gray-800'}>
            {todos.map(item => <TodoComponent key={item.id} todo={item}/>)}
        </div>
    );
};

export default TodoComponents;