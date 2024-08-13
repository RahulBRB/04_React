import React from "react"
import boxes from "./boxes"

export default function App() {

    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */


    const [square, setSquare] = React.useState(boxes)
    const styles ={
        backgroundColor: "transparent",
        border: "1px solid black",
        width: "200px",
        height: "200px"
    }

    const squareElements = square.map(square => {
        return (
            <div key={square.id} className="box" style={styles}></div>
        )
    })

    return (
        <main>
            <h1>{squareElements}</h1>
        </main>
    )
}
