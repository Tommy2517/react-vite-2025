import {useEffect, useState} from 'react';
import {getTodoDataDummy} from "../../../../services/api.service.ts";
import {IDummyTodo} from "../../../../models/IDummyTodo.ts";
import DummyComponent from "../TodoComponent/DummyComponent.tsx";

const DummyComponents = () => {
    const [todos, setTodos] = useState<IDummyTodo | null>(null)

    useEffect(()=>{
        getTodoDataDummy()
            .then(response => setTodos(response))
    },[])
    if(!todos) return <div>loaging...</div>

    return (
        <div className={'flex flex-wrap gap-4 p-6 justify-center text-lg font-serif'}>
            {todos.todos.map(item => <DummyComponent key={item.id} todo={item}/>)}
        </div>
    );
};

export default DummyComponents;