import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoTask/TodoItem';
import { useState } from 'react';

function App() {
  const[todo, setTodo] = useState ([])
  
  const getItem = (item) =>{
    setTodo((prevState)=> {
      return [...prevState, item]
    })
  }

  const getCompleted =(id) =>{
    setTodo((prevState)=>{
      return prevState.filter((item, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      
    <div className="todo-container"> 
      <AddTodo item={getItem}/>
      {todo && todo.map((todo, index)=> (
      <TodoItem id={index} item = {todo} completed ={getCompleted}/>

      ))}
    </div>
    </div>
  );
}


export default App;
