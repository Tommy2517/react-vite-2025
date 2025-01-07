import {FC} from 'react';
import PlaceholderComponents from "../todos/PlaceholderComponents/TodoComponents/PlaceholderComponents.tsx";

type ContentPropType = {
    showTodoComponent:boolean;
}
const ContentComponent:FC<ContentPropType> = ({showTodoComponent}) => {

    return (
        <div>
            {showTodoComponent && <PlaceholderComponents/>}
        </div>
    );
};

export default ContentComponent;