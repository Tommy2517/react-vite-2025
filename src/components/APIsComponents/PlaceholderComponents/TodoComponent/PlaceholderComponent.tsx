import {FC, useState} from 'react';
import {IPlaceholderTodo} from "../../../../models/IPlaceholderTodo.ts";
import '../../stylesComponent/TodoComponent.css'

type TodoPropType = {
    todo: IPlaceholderTodo;
}
const PlaceholderComponent: FC<TodoPropType> = ({todo}) => {
    const [complete,setComplete] = useState(todo.completed)
    const isCompleted = () => {
        setComplete(!complete)
    }
    return (
        <div onClick={isCompleted}  className={`todoMainBlock ${complete ? 'border-green-500' : 'border-red-500'}`}>
            <div>task - {todo.title}</div>
            <div className={'todoInfoBlock'}>
                <span>todo id - {todo.id}</span>
                <span>userId - {todo.userId}</span>
            </div>
        </div>
    );
};

export default PlaceholderComponent;