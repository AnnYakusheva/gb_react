import { nanoid } from 'nanoid';
import React, { useEffect, useState, FC } from 'react';
import Form from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';

export interface Message {
  id: string,
  text: string,
  author: string
}

const defaultMessages = [
  {
    id: '1',
    author: 'Kate',
    text: 'Welcome to the chat'
  }
]

export const App: FC = () => {

  const [messages, setMessages] = useState<Message[]>(defaultMessages)

  useEffect(() => {
    if (messages.length && messages[messages.length-1].author !== 'Bot') {
      const timeout = setTimeout(() => 
      addMessage({
        author: 'Bot',
        text: 'Bot is answering...'
      }), 1000)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messages])

  const addMessage = ({text, author}: {text: string, author: string}) => {
    setMessages(messages => [
      ...messages, {
      id: nanoid(),
      author,
      text
    }])
  }

  return (
    <>
      <h2>Welcome to ReactChat</h2>
      <MessageList messages={messages}/>
      <Form addMessage={addMessage} />
    </>
  )
}

export default App;
