import React from "react";
import Contacts from "./Contacts";
import Card from "./Card";
import Avatar from "./Avatar";

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar scr="https://th.bing.com/th/id/OIP.YSJL3F66LEPpqj3NiH8l7gHaHa?w=160&h=180&c=7&r=0&o=5&pid=1.7" />
            <Card name={Contacts[0].name} img={Contacts[0].imgURL} tel={Contacts[0].phone} email={Contacts[0].email} />
            <Card name={Contacts[1].name} img={Contacts[1].imgURL} tel={Contacts[1].phone} email={Contacts[1].email} />
            <Card name={Contacts[2].name} img={Contacts[2].imgURL} tel={Contacts[2].phone} email={Contacts[2].email} />
        </div>
    );
}

export default App;
