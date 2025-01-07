import {FC} from 'react';
import DummyComponents from "../APIsComponents/DummyComponents/TodoComponents/DummyComponents.tsx";

type ContentPropType = {
    showTodoComponent:boolean;
}
const ContentComponent:FC<ContentPropType> = ({showTodoComponent}) => {

    return (
        <div>
            {showTodoComponent && <DummyComponents/>}
        </div>
    );
};

export default ContentComponent;