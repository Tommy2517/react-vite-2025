import React, {FC} from 'react';
type MyComponentProopType = { text:string }
const MyComponent:FC<MyComponentProopType> = ({text}) => {
    return (
        <div>{text}</div>
    );
};

export default MyComponent;