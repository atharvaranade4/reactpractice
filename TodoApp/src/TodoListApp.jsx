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

    // const completeItem = (id, checked) => {
    //     console.log(todos)
    //     console.log('complete')
    //     const newTodos = [...todos];            
    //     console.log(newTodos)
    //     console.log(newTodos.id)
    //     // document.getElementById(`todo-${id}`).children[1].style.backgroundColor= '#ff0000'
    // }

    const completeItem = (id, checked) => {
        setTodos((todos) => {
            // get the index  of the item using id
            const index = todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
                // make shallow copy
                const newTodos = [...todos]
                // change check to true
                newTodos[index].checked = checked
                document.getElementById(`todo-${id}`).style.backgroundColor = checked ? '#ff0000' : '';
                // get the completed todo
                const completedTodo = newTodos[index]
                // get uncheckedTodos
                const uncheckedTodos = newTodos.filter((item, i) => i !== index);
                // if checked is true, append completedTodo at the end of uncheckedTodo list, else return unchecked todo
                return checked ? [...uncheckedTodos, completedTodo] : newTodos;
            }
            
            return todos;
        });
      };

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