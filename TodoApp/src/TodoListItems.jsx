import React from "react";

function TodoListItems ( { todos, removeTodo }) {

    const toDoList = todos.map((todo) => {
        return (
            <>
                <div key={todo.id}>
                    {todo.text}
                <button onClick={() => removeTodo(todo.id)}>X</button>
                </div>
            </>
        )
    })

    console.log(todos)
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