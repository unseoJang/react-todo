// @ts-nocheck
import { useState } from "react"

function fetchTodos(){
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);    
    result.push(value)
  }

  return result
}

function App() {
  // const [count, setCount] =  (0)
  const [inputText, setInputText] = useState('')
  const todos = fetchTodos()

  const handleInput = (event) => {
    const {value} = event.target
    setInputText(value)
  }

  
  const handleClick = ()=>{
    localStorage.setItem(inputText,inputText)
    setInputText('')
  }

  return (
    <div>
      <h1>TODO 앱</h1>
      <div>
        <input type="text" value={inputText} onChange={handleInput}  />
        <button onClick={handleClick}>add</button>
      </div>

      <div>
        <ul>
          {todos.map((todo,index)=>{
            return (
              <li key={index}>{todo}
                <span>remove</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div> 
  )
}

export default App
