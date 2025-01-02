import {FC} from 'react';
// import './styles/MyComponent.css'
type MyComponentProopType = { text:string }
const MyComponent:FC<MyComponentProopType> = ({text}) => {
    return (
        <div className={'text-3xl font-bold underline'}>{text}</div>
    );
};

export default MyComponent;