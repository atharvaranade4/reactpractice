import React from "react";

function TodoListForm ( {itemToAdd, setItemText, addItem}) {
    return (
        <>
            <form onSubmit={addItem}>
                <label htmlFor="todo-input">Todo: </label>
                <input 
                    id="todo-inoput" 
                    type="text" 
                    value={itemToAdd}
                    onChange={e => setItemText(e.target.value)}
                    />
                <button type="submit">Add Todo</button>
            </form>
        </>
    )
}

export default TodoListForm