import {useState} from 'react';

const Counter = () => {
    let [counter, setCounter]= useState<number>(0)
    return (
        <div>
            <button onClick={()=>{
                setCounter(++counter)}
            }>inc</button>
            <button onClick={()=>{
                setCounter(--counter)}
            }>dec</button>
            <h2>{counter}</h2>
        </div>
    );
};

export default Counter;