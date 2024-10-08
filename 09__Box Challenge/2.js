import React from "react"
import boxes from "./boxes"

export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)
    
    
    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"

    const styles = {
        backgroundColor: props.darkMode? "#222222" : "#cccccc",
    }

    const squareElements = squares.map(square => {
        return (
            <div 
                key={square.id}
                style={styles}
            ></div>
        )
    })
}