import React, { Fragment } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/input';
import { Message } from './components/Message/message';

const name = "Ivan"
const message = "Переданный текст"

function App() {
  return (
    <Fragment>
      <h2>Hello</h2>
      <Input name={name}></Input>
      <Button name={name}/>
      <Message message={message}></Message>
    </Fragment>
  )
}

export default App;
