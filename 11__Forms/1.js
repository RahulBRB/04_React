import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")  
    
    function handleChange(event){
        setFirstName(event.target.value)
        console.log("Changed!")
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange={e=>setLastName(e.target.value)}
                />
        </form>
    )
}