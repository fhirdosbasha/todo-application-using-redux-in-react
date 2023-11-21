import { useSelector } from "react-redux"
import Todo from "./Todo"

function TodoList() {
    let todos = useSelector(
        (state) => state.todos
    )
    return(
        <ul className="list-group mt-4">
            {todos.map(
                (todo) => (
                    <Todo key={todo.id} id={todo.id} title={todo.title}/>
                )
            )}
        </ul>
    )
}

export default TodoList