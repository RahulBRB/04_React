import React from "react"

export default function App() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     * */
    const [show, setShow] = React.useState(true)
    const toggleClick = () => {
        setShow(prevShow => !prevShow)
    }

    /**
  * Challenge:
  * 1. Create state called `windowWidth`, default to 
  *    `window.innerWidth`
  * 2. When the window width changes, update the state
  * 3. Display the window width in the h1 so it updates
  *    every time it changes
  */

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        window.addEventListener("resize", function () {
            setWindowWidth(window.innerWidth)
        })
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
