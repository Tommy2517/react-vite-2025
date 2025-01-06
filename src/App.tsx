import './App.css'
import TodoComponents from "./components/todos/TodoComponents/TodoComponents.tsx";

function App() {

  return (
    <>
      {/*https://jsonplaceholder.typicode.com/todos - тут масив даних. ознайомтесь з ним для початку*/}
      {/*Створити компонент TodoComponent який буде містити інформацію про окремий об'єкт з масиву.*/}
      {/*Створити компонент TodoComponents в якому відбувається ітерація масиву даних отриманих з апі.*/}
      {/*Кореневим компонентом є App*/}
      <TodoComponents/>
    </>
  )
}

export default App