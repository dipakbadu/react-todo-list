import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput("")
  }

  return (
    <form onSubmit={handleSubmit} className = "mt-3">
      <InputGroup className="mb-2">
        <Form.Control 
          type="text"
          value = {userInput}
          placeholder="Enter Your Task..."
          onChange = {handleChange}
        />
        <InputGroup.Append>
          <Button type = "submit" variant="outline-secondary">Add</Button>
        </InputGroup.Append>
      </InputGroup>
    </form>
  )
}

export default ToDoForm;
