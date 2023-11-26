import React from "react";

function TodoListItems ( { todos, removeTodo, completeTodo }) {

    const toDoList = todos.map((todo) => {
        return (
            <>
                <div key={todo.id} id={`todo-${todo.id}`}>
                    {todo.text}
                <button onClick={() => removeTodo(todo.id)}>X</button>
                <button className='btn-done'onClick={() => completeTodo(todo.id)}>Done</button>
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