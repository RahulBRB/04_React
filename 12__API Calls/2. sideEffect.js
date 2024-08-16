import React, {useState, useEffect} from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(0)

    console.log("Rendering App")


    //side effects
    useEffect(()=>{
        console.log("Effect funtion ran")
    }, [count])  

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}