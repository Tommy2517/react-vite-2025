import {ITodo} from "./ITodo.ts";

export interface IDummyTodos {
	todos: IDummyTodo[];
	total: number;
	skip: number;
	limit: number;
}
export interface IDummyTodo extends ITodo{
	todo: string;
}