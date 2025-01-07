import './App.css'
import ContentComponent from "./components/ContentComponent/ContentComponent.tsx";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.tsx";
import {useState} from "react";

function App() {
    const [showTodoComponent, setShowTodoComponent] = useState(false)
    const [buttonName, setButtonName] = useState<string>('')
    const toggle = (ChooseButtonName:string) => {
        //1 кнопка нажата из плейсхолдера в плейсхолдер
        //2 кнопка отжата из деми в деми
        //3 кнопка нажата из деми в плейсхолдер
        //4 кнопка нажата из плейсхолдера в деми
        //5 первое нажатие
        if (!buttonName) {
            setShowTodoComponent(!showTodoComponent)
            setButtonName(ChooseButtonName)
        }
        if (buttonName === ChooseButtonName){
            setShowTodoComponent(!showTodoComponent)
            setButtonName('')
        }
        else {
            setButtonName(ChooseButtonName)
        }
    }
    return (
        <>
            {<HeaderComponent onToggle={toggle}/>}
            {<ContentComponent showTodoComponent={showTodoComponent} buttonName={buttonName}/>}
        </>
    )
}

export default App