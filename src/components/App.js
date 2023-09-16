import React, { useState } from "react";

function App() {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);  // State to hold the array of todos

    function handleChange(event) {
        const newTodo = event.target.value;  // Get the new todo from the input
        setTodo(newTodo);  // Update the todo state with the new value
    }

    function handleClick() {
        setTodos(prevTodos => [...prevTodos, todo]);  // Add todo to the todos array
        setTodo("");  // Clear the input after adding todo to the array
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={todo}
                />
                <button onClick={handleClick}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {todos.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;