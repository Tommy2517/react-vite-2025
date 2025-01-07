import {FC} from 'react';
import DummyComponents from "../APIsComponents/DummyComponents/TodoComponents/DummyComponents.tsx";
import PlaceholderComponents from "../APIsComponents/PlaceholderComponents/TodoComponents/PlaceholderComponents.tsx";

type ContentPropType = {
    showTodoComponent:boolean;
    buttonName:string;
}
const ContentComponent:FC<ContentPropType> = ({showTodoComponent,buttonName}) => {
if (buttonName === 'PlaceholderButton') {
    return (
        <div>
            {showTodoComponent && <PlaceholderComponents/>}
        </div>
    );
}

if (buttonName === 'DummyButton') {
    return (
        <div>
            {showTodoComponent && <DummyComponents/>}
        </div>
    );
}
};

export default ContentComponent;