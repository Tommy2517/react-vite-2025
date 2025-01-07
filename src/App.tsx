import './App.css'
import TodoComponents from "./components/todos/TodoComponents/TodoComponents.tsx";
import ContentComponent from "./components/ContentComponent/ContentComponent.tsx";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.tsx";
import {useState} from "react";

function App() {
    const [showTodoComponent, setShowTodoComponent] = useState(false)
    const toggle = () => {
        setShowTodoComponent(!showTodoComponent)
    }
    return (
        <>
            {<HeaderComponent onToggle={toggle}/>}
            {<ContentComponent showTodoComponent={showTodoComponent}/>}
        </>
    )
}

export default App