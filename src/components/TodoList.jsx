// @ts-nocheck
const TodoList = ({ todos, onTodoRemove }) => {

	return (
		<div>
        <ul>
          {todos.map((todo,index)=>{
            return (
              <li key={index}>{todo}
                <button onClick={()=>onTodoRemove(todo, index)}>remove</button>
              </li>
            )
          })}
        </ul>
      </div>
	)
}

export default TodoList