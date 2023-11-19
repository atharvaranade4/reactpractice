import React from "react";

function TodoListItems ( { todos, removeTodo }) {

    const toDoList = todos.map((i, index) => {
        return (
            <>
                <div key={index}>
                    {i}
                <button onClick={() => removeTodo(i)}>X</button>
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