import React, { useState } from "react";
import TodoListForm from "./TodoListForm";
import TodoListItems from "./TodoListItems";

function TodoListApp () {
    const [itemToAdd, setItemText] = useState('');
    const [todos, setTodos] = useState([]);

    // console.log(todos)

    const addItem = (e) => {
        e.preventDefault()
        // window.alert('Form submitted');
        setTodos([...todos, itemToAdd])
        setItemText('')
    }

    const removeTodo = () => {
        console.log("remove")
    }

    return (
        <>
            <h1>TODO LIST APP</h1>
            <TodoListForm 
                itemToAdd={itemToAdd}
                setItemText={setItemText}
                addItem={addItem}
            />
            <TodoListItems 
                todos={todos}
                removeTodo={removeTodo}
            />
        </>
    )
}

export default TodoListApp