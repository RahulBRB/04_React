import React, { useEffect, useState } from "react";

export default function App() {
    const [starWarsData, setStarWarsData] = useState({});

    useEffect(() => {
        console.log("Component mounted");

        fetch("<https://swapi.dev/api/people/1>")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    );
}
