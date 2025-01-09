import DummyComponent from "../TodoComponent/DummyComponent.tsx";
import {useDummyListTodos} from "./useDummyListTodos.ts";

const DummyComponents = () => {
const {todos} = useDummyListTodos()
    if(!todos) return <div>loaging...</div>

    return (
        <div className={'flex flex-wrap gap-4 p-6 justify-center text-lg font-serif'}>
            {todos.todos.map(item => <DummyComponent key={item.id} todo={item}/>)}
        </div>
    );
};

export default DummyComponents;