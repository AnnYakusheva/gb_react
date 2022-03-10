import React, { Fragment } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/input';

const name = "Ivan"

function App() {
  return (
    <Fragment>
      <h2>Hello</h2>
      <Input name={name}></Input>
      <Button name={name}/>
    </Fragment>
  )
}

export default App;
