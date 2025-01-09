import {useEffect, useState} from "react";
import {ITodo} from "../../../../models/ITodo.ts";
import {getTodoDataPlaceholder} from "../../../../services/api.service.ts";

export const usePlaceholderListTodos = () => {
    const [todos, setTodos] = useState<ITodo[] | null>(null)
    useEffect(()=>{
        getTodoDataPlaceholder()
            .then(response => setTodos(response))
    },[])
    return {todos}
}