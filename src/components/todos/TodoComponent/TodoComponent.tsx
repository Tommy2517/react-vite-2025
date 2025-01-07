import {FC} from 'react';
import {IPlaceholderTodo} from "../../../models/IPlaceholderTodo";

type TodoPropType = {
    todo: IPlaceholderTodo;
}
const TodoComponent: FC<TodoPropType> = ({todo}) => {
    return (
        <div className={"bg-gray-100 flex-grow text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"}>
            <div>task - {todo.title}</div>
            <div className={'text-gray-500 font-thin text-sm pt-1 flex justify-evenly'}>
                <span>todo id - {todo.id}</span>
                <span>userId - {todo.userId}</span>
            </div>
        </div>
    );
};

export default TodoComponent;