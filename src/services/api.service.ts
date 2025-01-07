import {IPlaceholderTodo} from "../models/IPlaceholderTodo";
import {IDummyTodo} from "../models/IDummyTodo.ts";

export const getTodoDataPlaceholder = async ():Promise<IPlaceholderTodo[]>=>{
    return await fetch(import.meta.env.VITE_API_URL_JS_PLACEHOLDER)
    .then(response => response.json())
}
export const getTodoDataDummy = async ():Promise<IDummyTodo>=>{
    return await fetch(import.meta.env.VITE_API_URL_JS_DUMMY)
    .then(response => response.json())
}
