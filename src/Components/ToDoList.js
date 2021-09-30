import React, { useEffect } from 'react'
import ToDo from './ToDo'


export default function ToDoList({ todos, setTodos, filteredTodos }) {

    useEffect(() => {
    }, [todos])





    return (
        <>
            <div className='todo-container'>
                <ul className='todo-list' >
                    {filteredTodos.map(todo => (
                        <ToDo
                            key={todo.id}
                            text={todo.text}
                            setTodos={setTodos}
                            todos={todos}
                            todo={todo}
                        />
                    ))}
                </ul>
            </div>
        </>
    )
}
