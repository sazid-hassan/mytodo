import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';

//Components
import Form from './Form';
import ToDoList from './ToDoList';


export default function Home() {

    //states
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    //func
    const filterHandle = () => {
        switch (status) {
            case 'finished':
                setFilteredTodos(todos.filter(todo => todo.finished === true));
                break;
            case 'Unfinished':
                setFilteredTodos(todos.filter(todo => todo.finished === false));
                break;
            default:
                setFilteredTodos(todos);
        }
    }

    //save to local

    const saveLocal = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocal = () => {
        if (localStorage.getItem('todos' === null)) {
            localStorage.setItem('todos', JSON.stringify([]));
        }
        else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            console.log(todoLocal)
            setTodos(todoLocal);
        }
    }


    //effect
    useEffect(() => {
        getLocal();
    }, [])

    useEffect(() => {
        filterHandle();
        saveLocal();
    }, [todos, status])


    return (
        <>
            <Typography variant="h4" gutterBottom align='center' style={{ color: "#fff" }}>
                Your To Do List!
            </Typography>

            <Form
                setInputText={setInputText}
                inputText={inputText}
                setTodos={setTodos}
                todos={todos}
                setStatus={setStatus}
            />

            <ToDoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}

            />
        </>
    )
}
