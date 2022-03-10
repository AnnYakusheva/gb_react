import { useState } from "react";


export const Input = (props) => {
    const [name, setName] = useState('some name')

    const handleChange = (ev) => {
        setName(ev.target.value)
    }

    return (
        <>
            <p>{name}</p>
            <input onChange={ev => handleChange(ev)}></input>
        </>   
    )
}