import React, { useState } from "react";

function App() {
    const [name, setName] = useState("")
    const [fullName, setFullName] = useState("");

    function handleChange(event) {
        console.log(event.target);
        setName(event.target.value);
    }

    function handleClick(event) {
        console.log("Clicked");
        setFullName(name);

        event.preventDefault();
        setName("");
    }
    return (
        <div className="container">
            <h1>Hello {fullName} </h1>
            <form onSubmit={handleClick}>
                <input type="text" placeholder="What's your name?" onChange={handleChange} value={name} />
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default App;