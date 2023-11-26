import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import TodoListForm from "./TodoListForm";
import TodoListItems from "./TodoListItems";

function TodoListApp () {
    const [itemToAdd, setItemText] = useState('');
    const [todos, setTodos] = useState([]);


    // console.log(todos)

    const addItem = (e) => {
        if (itemToAdd.length > 0) {
            e.preventDefault()
            const newTodo = {
                id: uuidv4(),
                text: itemToAdd,
                checked: false
            }
            // window.alert('Form submitted');
            setTodos([...todos, newTodo])
            setItemText('')
        }
        else {
            window.alert('Please enter a todo');
            e.preventDefault()
        }
    }

    const removeItem = (id) => {
        const newList = todos.filter((item) => item.id !== id);
        setTodos(newList);
        return newList
    }

    const completeItem = (id) => {
        console.log(id)
        console.log('complete')
        document.getElementById(`todo-${id}`).children[1].style.backgroundColor= '#ff0000'
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
                completeTodo={completeItem}
            />
        </>
    )
}

export default TodoListApp