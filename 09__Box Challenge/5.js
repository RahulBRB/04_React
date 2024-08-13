import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {
        /**
        * Challenge: use setSquares to update the
        * correct square in the array.
        * 
        * Make sure not to directly modify state!
        * 
        * Hint: look back at the lesson on updating arrays
        * in state if you need a reminder on how to do this
        */

        setSquares(prevSquares => {
            return prevSquares.map(square => {
                return square.id === id ? { ...square, on: !square.on } : square
            })
        })

    }

    const squareElements = squares.map(square => (
        <Box
            key={square.id}
            id={square.id}
            on={square.on}
            toggle={() => toggle(square.id)}
        />
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
