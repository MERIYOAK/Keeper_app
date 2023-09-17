// TodoItem.js
import React from "react";

function TodoItem(props) {

    return (
        <li onClick={() => {
            props.onCheck(props.id)
        }} >
            {props.text}
        </li>
    );
}

export default TodoItem;
