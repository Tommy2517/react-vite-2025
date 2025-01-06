import {FC} from 'react';
import {ITodo} from "../../../models/ITodo.ts";
type TodoPropType = {
    todo:ITodo;
}
const TodoComponent: FC<TodoPropType> = ({todo}) => {
    return (
        <div className={'bg-gray-200 rounded-lg p-6 m-4 max-w-sm flex flex-col items-center space-y-4'}>
            {todo.title}
            <h1></h1>
        </div>
    );
};

export default TodoComponent;