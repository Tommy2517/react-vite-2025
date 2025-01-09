import {useEffect, useState} from "react";
import {getTodoDataDummy} from "../../../../services/api.service.ts";
import {IDummyTodos} from "../../../../models/IDummyTodos.ts";

export const useDummyListTodos = () => {
    const [todos, setTodos] = useState<IDummyTodos | null>(null)

    useEffect(()=>{
        getTodoDataDummy()
            .then(response => setTodos(response))
    },[])
    return {todos}
}