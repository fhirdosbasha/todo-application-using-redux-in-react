import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "./actions"
import TodoList from "./TodoList"

function App(){
  let [todoTitle, setTodoTitle] = useState('')
  const dispatch = useDispatch()

  let handleAddTodo =  () => {
    if(todoTitle.trim()){
      let newTodo = {title: todoTitle}
      dispatch(addTodo(newTodo))
      setTodoTitle('')
    }
  }

  return(
    <div className="container mt-5 w-50">
      <h2 className="text-primary text-center">Todo application using redux in react</h2>
      <div className="input-group">
        <input type="text" value={todoTitle} className="form-control" 
        placeholder="Enter todo title" onChange={
          (e) => setTodoTitle(e.target.value)
        }/>
        <button className="btn btn-primary" onClick={handleAddTodo}>Add</button>
      </div>

      <TodoList/>
    </div>
  )
}

export default App