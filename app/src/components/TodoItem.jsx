import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleDone, updateTodo } from "../redux/actions";


const Todo = ({ todo }) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data);
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
        dispatch(updateTodo(todo._id, { data: text }));
    }

    return (
        <li className="task"
        style={{
            textDecoration: todo?.done ? 'line-through' : '',
            color: todo?.done ? '#bdc3c7' : '#34495e'
        }}>
            <span style={{ display: editing ? 'none' : '' }}
            onClick={() => dispatch(toggleDone(todo._id))}> 
                {todo?.data}
            </span>

            <form style={{ display: editing ? 'inline' : 'none' }} 
            onSubmit={onFormSubmit}>
				<input type="text" value={text} className="edit-todo" onChange={(e) => setText(e.target.value)}/>
            </form>

            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash" />
            </span>
            <span className="icon" onClick={() => setEditing(true)}>
                <i className="fas fa-pen" />
            </span>
        </li>
    )
}

export default Todo;