import {FC, ReactNode} from 'react';
import './FirstComponent.css'
type FirstComponentType = {
    text: string;
    children?: ReactNode;
}
const FirstComponent: FC<FirstComponentType> = ({text, children}) => {
    return (
        <div>
            <h2 className={'target'}>{text}</h2>
            <p className={'text-3xl font-bold underline'}>{children}</p>
        </div>
    );
};

export default FirstComponent;