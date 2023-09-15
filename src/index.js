//CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
//import animals, { useAnimals } from "./data";

// //Destructing arrays
// console.log(animals);
// const [cat, dog] = animals;
// console.log(cat);

// //Destructuring objects
// //const {name, sounds} = cat;
// const {name: catName, sounds: catSound, feedingRequirments: {food, water}} = cat;
// const {name = "Fluffy", sounds = "Purr"} = cat;
// //const {feedingRequirments: {food, water}} = cat;


// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

const [honda, tesla] = cars;

const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;

const { coloursByPopularity: [hondaTopColour] } = honda;
const { coloursByPopularity: [teslaTopColour] } = tesla;



ReactDOM.render(
    <table>
        <thead>
            <tr>
                <th>Brand</th>
                <th>Top Speed</th>
                <th>Top Colour</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{tesla.model}</td>
                <td>{teslaTopSpeed}</td>
                <td>{teslaTopColour}</td>
            </tr>
            <tr>
                <td>{honda.model}</td>
                <td>{hondaTopSpeed}</td>
                <td>{hondaTopColour}</td>
            </tr>
        </tbody>

    </table>,
    document.getElementById("root")
);