import './App.css'
import ContentComponent from "./components/ContentComponent/ContentComponent.tsx";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.tsx";
import {useState} from "react";

function App() {
    const [showTodoComponent, setShowTodoComponent] = useState(false)
    const [buttonName, setButtonName] = useState<string>('')
    const toggle = (buttonName:string) => {
        setShowTodoComponent(!showTodoComponent)
        setButtonName(buttonName)
    }
    return (
        <>
            {<HeaderComponent onToggle={toggle}/>}
            {<ContentComponent showTodoComponent={showTodoComponent} buttonName={buttonName}/>}
        </>
    )
}

export default App