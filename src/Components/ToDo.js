import React from 'react';

//MUI
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';

export default function ToDo({ text, todo, todos, setTodos }) {

    //functions
    const deleteHandle = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const finishedHandle = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, finished: !item.finished
                }
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <li key={text} className={`todo-item ${todo.finished ? "completed" : ""}`} >{text}</li>
            <button onClick={finishedHandle}>
                <CheckCircleSharpIcon style={{ fill: "green" }} />
            </button>
            <button onClick={deleteHandle}>
                <DeleteRoundedIcon style={{ fill: "red" }} />
            </button>
        </div>
    )
}
