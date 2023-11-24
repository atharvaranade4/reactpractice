import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import TodoListForm from "./TodoListForm";
import TodoListItems from "./TodoListItems";

function TodoListApp () {
    const [itemToAdd, setItemText] = useState('');
    const [todos, setTodos] = useState([]);

    // console.log(todos)

    const addItem = (e) => {
        e.preventDefault()
        const newTodo = {
            id: uuidv4(),
            text: itemToAdd
        }
        // window.alert('Form submitted');
        setTodos([...todos, newTodo])
        setItemText('')
    }

    const removeItem = (id) => {
        const newList = todos.filter((item) => item.id !== id);
        setTodos(newList);
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
                removeTodo={removeItem}
            />
        </>
    )
}

export default TodoListApp