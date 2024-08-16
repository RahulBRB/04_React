// Text Area 
import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            comments: "",
        }
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

        return (
            <form>
                <textarea
                    placeholder="Comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                />
            </form>
        )
    }
}
