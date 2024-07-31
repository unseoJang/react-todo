// @ts-nocheck
import { useState } from "react"


export const TodoInput  = ({onTodoAdd}) => {
	const [inputText, setInputText] = useState('')


	const handleInput = (event) => {
    const {value} = event.target
    setInputText(value)
  }

	const handleClick = () => {
		onTodoAdd(inputText)
		setInputText('')
	}

	return(
		<div>
			<input type="text" value={inputText} onChange={handleInput}  />
			<button onClick={handleClick}>add</button>
		</div>
	)
}
