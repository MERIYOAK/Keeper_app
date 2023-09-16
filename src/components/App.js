import React, { useState } from "react";

function App() {

    const [textHeading, setTextHeading] = useState("hello");
    const [isMouseOver, setMouseOver] = useState(false);

    function handleClick() {
        setTextHeading("i am meron");

    }

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <div className="container">
            <h1>{textHeading}</h1>
            <input type="text" placeholder="What's your name?" />
            <button style={{ backgroundColor: isMouseOver ? "black" : "white" }} onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button>
        </div>
    );
}

export default App;