import {useEffect, useState} from "react";
import {getTodoDataDummy} from "../../../../services/api.service.ts";
import {IDummyTodo} from "../../../../models/IDummyTodo.ts";

export const useDummyListTodos = () => {
    const [todos, setTodos] = useState<IDummyTodo | null>(null)

    useEffect(()=>{
        getTodoDataDummy()
            .then(response => setTodos(response))
    },[])
    return {todos}
}