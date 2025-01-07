export interface IDummyTodo {
	todos: IDummyTodoTodos[];
	total: number;
	skip: number;
	limit: number;
}
export interface IDummyTodoTodos {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
}