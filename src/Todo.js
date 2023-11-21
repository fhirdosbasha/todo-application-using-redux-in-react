import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteTodo, editTodo } from "./actions"

function Todo({id, title}) {
    let [editing, setEditing] = useState(false)
    let [newTitle, setNewTitle] = useState(title)
    const dispatch = useDispatch()

    let handleTodoSave = () => {
        if(newTitle.trim()) {
            dispatch(editTodo({id:id, title: newTitle}))
            setEditing(false)
        }
    }

    let handleDeleteTodo = () => {
        dispatch(deleteTodo(id))
    }

    return(
        <div>
            {
                editing ? (
                    <div className="form-group">
                        <input type="text" value={newTitle} className="form-control" onChange={
                            (e) => setNewTitle(e.target.value)
                        }/>
                        <button className="btn btn-secondary" onClick={handleTodoSave}>Save</button>
                    </div>
                ) : (
                    <li className="list-group-items">
                        <p>{title}</p>
                        <div className="actions">
                            <button className="btn btn-warning" onClick={() => setEditing(true)}>Edit</button>
                            <button className="btn btn-danger" onClick={handleDeleteTodo}>Delete</button>
                        </div>
                    </li>
                )
            }
        </div>
    )
}

export default Todo