import { useState } from 'react';
import './App.css';
import TodoCard from './components/TodoCard/TodoCard';

function App() {

  const todoList = [
    {
      title: "Aprender React 1",
      description: "repasar las grabaciones y entrar a todas mis clases",
      isCompleted: false
    },
    {
      title: "Aprender React 2",
      description: "repasar las grabaciones y entrar a todas mis clases",
      isCompleted: false
    },
    {
      title: "Aprender React 3",
      description: "repasar las grabaciones y entrar a todas mis clases",
      isCompleted: false
    }
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [todoTitle, setTodoTitle] = useState('Estudiar useState')
  const [todoDescription, setTodoDescription] = useState('esto es una descripcion')
  const [todoIsCompleted, setTodoIsCompleted] = useState(false)
  
  
  const changeTodo = () => {
    setCurrentIndex( currentIndex + 1 )
    setTodoTitle(todoList[currentIndex].title)
    setTodoDescription(todoList[currentIndex].description)
    setTodoIsCompleted(todoList[currentIndex].isCompleted)
  }  


  return (
    <div className="App">
      <TodoCard title={todoTitle} description={todoDescription} isCompleted={todoIsCompleted} />
      <button onClick={() => changeTodo()} >Cambiar de tarea</button>
    </div>
  );
}

export default App;
