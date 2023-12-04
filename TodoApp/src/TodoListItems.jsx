import React, { useState } from "react";
import PropTypes from 'prop-types';

function TodoListItems ( { todos, removeTodo, completeTodo, editTodo }) {
    const [editing, setEditing] = useState(false)

    const handleItem = (todoId) => {
        setEditing(todoId)
    }

    const handleeditDone = (e) => {
        if (e.key === 'Enter') {
            setEditing(null)
        }
    }

    const toDoList = todos.map((todo) => {
        return (
            <>
                <div key={todo.id} className={todo.checked ? 'color' : '' } >                    
                    <input 
                        type="checkbox"
                        value={todo.id}
                        checked={todo.checked}
                        onChange={() => completeTodo(todo.id, !todo.checked)}
                    />
                    { editing === todo.id ? (
                        <input
                        type="text"
                        value={todo.text}
                        onChange={(e) => editTodo(e.target.value, todo.id)}
                        onKeyDown={handleeditDone}
                    />
                    ) : (
                        <>
                            <span>{todo.text}</span>
                            <button onClick={() => removeTodo(todo.id)}>X</button>
                            <button onClick={() => handleItem(todo.id)}>Edit</button>
                        </>

                    )}
                {/* <button className='btn-done'onClick={() => completeTodo(todo.id)}>Done</button> */}
                </div>
                
            </>
        )
    })

    // console.log(todos)
    return (
        <>
            <h2>TO-DOs:</h2>
        <>
            {toDoList}
        </>
        </>
    )
}

export default TodoListItems

TodoListItems.propTypes = {
    todos: PropTypes.array.isRequired,
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
}