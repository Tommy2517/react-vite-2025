import './App.css'
import MyComponent from "./components/MyComponent/MyComponent.tsx";
import MyComponent2 from "./components/MyComponent/MyComponent2.tsx";
//branch lesson 1
function App() {

  return (
    <>
        <MyComponent text={'hello'}/>
        <MyComponent2 text={'okten'}/>
    </>
  )
}

export default App
