import React from "react";
import emojipedia from "../emojipedia";
import Card from './Card'

function createCard(emoji) {
    return (
        <Card
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning} />
    )
}
function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(createCard)}
            </dl>
        </div>
    );
}

export default App;
