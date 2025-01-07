import {useEffect, useState} from 'react';
import {getTodoDataPlaceholder} from "../../../services/api.service.ts";
import {IPlaceholderTodo} from "../../../models/IPlaceholderTodo";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";

const TodoComponents = () => {
    const [todos, setTodos] = useState<IPlaceholderTodo[]>([])

    useEffect(()=>{
        getTodoDataPlaceholder()
            .then(response => setTodos(response))
    },[])

    return (
        <div className={'flex flex-wrap gap-4 p-6 justify-center text-lg font-serif'}>
            {todos.map(item => <TodoComponent key={item.id} todo={item}/>)}
        </div>
    );
};

export default TodoComponents;