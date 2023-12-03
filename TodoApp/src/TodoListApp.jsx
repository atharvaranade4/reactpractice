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
            setTodos([newTodo, ...todos])
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


    const editItem = (updatedItem, id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.text = updatedItem
                }
                return todo
            })
        )
    }
    // const completeItem = (id, checked) => {
    //     console.log(todos)
    //     console.log('complete')
    //     const newTodos = [...todos];            
    //     console.log(newTodos)
    //     console.log(newTodos.id)
    //     // document.getElementById(`todo-${id}`).children[1].style.backgroundColor= '#ff0000'
    // }

    console.log("first todos",todos)
    const completeItem = (id, checked) => {
        setTodos((todos) => {
            // get the index  of the item using id
            const index = todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
                // make shallow copy
                const newTodos = [...todos]
                console.log('newtodos', newTodos)
                // change check to true
                newTodos[index].checked = checked
                // get the completed todo
                const completedTodo = newTodos[index]
                console.log('completedTodo', completedTodo)
                // get uncheckedTodos
                const uncheckedTodos = newTodos.filter((item, i) => i !== index);
                console.log('uncheckedTodos', uncheckedTodos)
                // if checked is true, append completedTodo at the end of uncheckedTodo list, else return unchecked todo
                // document.getElementById(`todo-${id}`).style.color = checked ? '#ff0000' : '';
                return checked ? [...uncheckedTodos, completedTodo] : newTodos;
            }
            console.log("second todos",todos)
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
                editTodo= {editItem}
            />
        </>
    )
}

export default TodoListApp