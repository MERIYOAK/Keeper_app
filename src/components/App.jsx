import React from "react";
import Login from "./Login";

const isLoggedin = false;

//const currentTime = new Date(2023, 9, 14, 14).getHours();

function App() {
    return (
        <div className="container">
            {
                isLoggedin ? <h1>Hello</h1> : <Login />
                //currentTime > 12 && <h1>what are doing until now?</h1>
            }
        </div>
    );
}

export default App;

