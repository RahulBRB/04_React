//In the code for previous practice, the event listener is not cleaned up when the component unmounts, which could lead to memory leaks.

import React from "react"

export default function App() {
    const [show, setShow] = React.useState(true)
    const toggleClick = () => {
        setShow(prevShow => !prevShow)
    }

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div className="container">
            <button onClick={toggleClick}>
                Toggle WindowTracker
            </button>
            <h1>Window width: {windowWidth}</h1>
            {show && <WindowTracker />}
        </div>
    )
}
