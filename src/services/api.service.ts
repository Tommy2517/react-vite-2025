import {ITodo} from "../models/ITodo.ts";
import {IDummyTodos} from "../models/IDummyTodos.ts";

export const getTodoDataPlaceholder = async ():Promise<ITodo[]>=>{
    return await fetch(import.meta.env.VITE_API_URL_JS_PLACEHOLDER)
    .then(response => response.json())
}
export const getTodoDataDummy = async ():Promise<IDummyTodos>=>{
    return await fetch(import.meta.env.VITE_API_URL_JS_DUMMY)
    .then(response => response.json())
}
