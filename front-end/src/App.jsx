import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'
import "./App.css";



function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const saveTodo = async()=>{
    const response = await fetch('http://localhost:3000',{
      method : "POST",
      body: JSON.stringify({
        todo : input
      }),
      headers : {
    'Content-type' : 'application/json'
      }
    })
    const json = await response.json();
    setTodos(json.data)
    alert("Created Successfully")
  }

  useEffect(()=>{
        const getTodos = async()=>{
      const response = await fetch('http://localhost:3000/')
      const json = await response.json()
      setTodos(json.data)
  }
    getTodos()
  },[])
    


  return (
    <div className="app">
      <h1 className="title">Todo App</h1>
      <ul className='todo-list'>{todos.map((todo,index) => (
        <li key={index} className='todo-item'>{todo}</li>
      ))}</ul>

      <div className='form'>
        <input type="text"
        placeholder='Enter todo'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='todo-input'
         />

        <button onClick={saveTodo} className='todo-btn'>
          SUBMIT
        </button>
      </div> 
    </div>
  );
} 

export default App
