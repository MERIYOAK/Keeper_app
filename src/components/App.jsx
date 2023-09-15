import React, { useState } from "react";

function App() {
    const options = { hour12: false };
    const [time, setTime] = useState(new Date().toLocaleTimeString(undefined, options));

    function timeSetter() {
        setTime(new Date().toLocaleTimeString(undefined, options));
    }

    function autoUpdate() {
        setInterval(timeSetter, 1000)
    }

    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={autoUpdate}>Get Time</button>
        </div>
    );
}

export default App;
