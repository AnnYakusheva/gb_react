// import { useState } from "react";
import React, { Component } from "react"

export const Message = (props) => {
    // const [message, setMessage] = useState('Введите сообщение')
        return (
            <>
                <h3>Message:</h3>
                <p>{props.message}</p>
            </>
        )
}