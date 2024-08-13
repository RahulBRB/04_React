import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    /*
    If punchline is shown, it should show option to hide it. If punchline is not being shown the option to show the punchline should be present.
    */
   
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>
                {isShown ? "Show punchline" : "Hide punchline"}
            </button>
            <hr />
        </div>
    )
}
