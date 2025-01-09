import {useEffect, useState} from "react";
import {IPlaceholderTodo} from "../../../../models/IPlaceholderTodo.ts";
import {getTodoDataPlaceholder} from "../../../../services/api.service.ts";

export const usePlaceholderListTodos = () => {
    const [todos, setTodos] = useState<IPlaceholderTodo[] | null>(null)
    useEffect(()=>{
        getTodoDataPlaceholder()
            .then(response => setTodos(response))
    },[])
    return {todos}
}