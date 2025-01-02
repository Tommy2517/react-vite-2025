import {FC, ReactNode} from 'react';
// import './styles/MyComponent.css'
type MyComponentProopType = {
    title: string
    children?: ReactNode
}
const MyComponent: FC<MyComponentProopType> = ({title, children}) => {
    return (
        <div className={'text-3xl font-bold underline'}>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
};

export default MyComponent;