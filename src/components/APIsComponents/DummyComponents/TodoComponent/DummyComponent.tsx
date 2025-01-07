import {FC, useState} from 'react';
import {IDummyTodoTodos} from "../../../../models/IDummyTodo.ts";
import '../../stylesComponent/TodoComponent.css'

type TodoPropType = {
    todo: IDummyTodoTodos;
}
const DummyComponent: FC<TodoPropType> = ({todo}) => {
    const [complete, setComplete] = useState(false)
    const isCompleted = () => {
        setComplete(!complete)
    }

    return (
        <div onClick={isCompleted} className={`todoMainBlock ${complete ? 'border-green-500' : 'border-red-500'}`}>
            <div>task - {todo.todo}</div>
            <div className={'todoInfoBlock'}>
                <span>todo id - {todo.id}</span>
                <span>userId - {todo.userId}</span>
            </div>
        </div>
    );
};

export default DummyComponent;