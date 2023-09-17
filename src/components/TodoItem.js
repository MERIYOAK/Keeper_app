// TodoItem.js
import React, { useState } from "react";

function TodoItem(props) {

    const [list, setList] = useState(false);

    function handleClick() {
        setList(prevValue => !prevValue);
    }

    return (
        <li onClick={handleClick} style={{ textDecoration: list ? "line-through" : "none" }}>{props.text}</li>
    );
}

export default TodoItem;
