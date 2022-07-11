import React, { FC } from 'react';
import { useState } from 'react';


interface Message {
    text: string,
    author: string
}

interface FormProps {
    addMessage: (message: Message) => void
}

export const Form: FC<FormProps> = ({addMessage}) => {

    const [text, setText] = useState('')

    const handleText = (ev) => {
        ev.preventDefault()
        addMessage({
            text, 
            author: 'User'
        })
        setText('')
    }

    return (
        <form onSubmit={handleText}>
            <input type="text" value={text} onChange={ev => setText(ev.target.value)} />
            <button type='submit'>Send</button>
        </form>
    );
}

export default Form;