import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";


const TodoForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (e) => { 
      e.preventDefault();
			dispatch(addTodo(text));
			setText('');
    }

    const onInputChange = (e) => {
      setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input  placeholder="Enter new todo..." className="input" onChange={onInputChange} value={text}/>
        </form>
    )
}

export default TodoForm;