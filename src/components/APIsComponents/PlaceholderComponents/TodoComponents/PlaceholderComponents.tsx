import PlaceholderComponent from "../TodoComponent/PlaceholderComponent.tsx";
import {usePlaceholderListTodos} from "./usePlaceholderListTodos.ts";

const PlaceholderComponents = () => {
    const {todos} = usePlaceholderListTodos()

    if(!todos) return <div>loaging...</div>

    return (
        <div className={'flex flex-wrap gap-4 p-6 justify-center text-lg font-serif'}>
            {todos.map(item => <PlaceholderComponent key={item.id} todo={item}/>)}
        </div>
    );
};

export default PlaceholderComponents;