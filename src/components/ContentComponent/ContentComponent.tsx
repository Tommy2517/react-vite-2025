import {FC} from 'react';
import TodoComponents from "../todos/TodoComponents/TodoComponents.tsx";

type ContentPropType = {
    showTodoComponent:boolean;
}
const ContentComponent:FC<ContentPropType> = ({showTodoComponent}) => {

    return (
        <div>
            {showTodoComponent && <TodoComponents/>}
        </div>
    );
};

export default ContentComponent;