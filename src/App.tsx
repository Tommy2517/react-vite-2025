import './App.css'
import ContentComponent from "./components/ContentComponent/ContentComponent.tsx";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.tsx";
import {useState} from "react";

function App() {
    const [showTodoComponent, setShowTodoComponent] = useState(false)
    const [buttonName, setButtonName] = useState<string>('')
    const toggle = (ChooseButtonName: string) => {
        //1 первое нажатие
        if (!buttonName) {
            setShowTodoComponent(!showTodoComponent)
            setButtonName(ChooseButtonName)
        }

        //2 кнопка нажата из плейсхолдера в плейсхолдер
        //3 кнопка отжата из деми в деми
        if (buttonName === ChooseButtonName) {
            setShowTodoComponent(!showTodoComponent)
            setButtonName('')
        }

        //4 кнопка нажата из деми в плейсхолдер
        //5 кнопка нажата из плейсхолдера в деми
        else {
            setButtonName(ChooseButtonName)
        }
    }
    return (
        <>
            <p>Hello, have a nice day!😊</p>
            <p>Select dummy or placeholder todos list on press appropriate buttons</p>
            <p>change todo status on click him</p>
            {<HeaderComponent onToggle={toggle}/>}
            {<ContentComponent showTodoComponent={showTodoComponent} buttonName={buttonName}/>}
        </>
    )
}

export default App