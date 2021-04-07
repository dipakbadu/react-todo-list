import React, { useState } from 'react'
import './style.css'
import ListGroup from 'react-bootstrap/ListGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
const ToDo = ({todo, handleToggle,updateTodo }) => {

  const [edit, setEdit] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    const updateDetails = {
      id: edit.id,
      value: e.currentTarget.value
    }
    setEdit(updateDetails)
  }

  const submitUpdate = (e) => {
    e.preventDefault()
    updateTodo(edit.id, edit.value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if(edit.id) {
    return <form onSubmit={submitUpdate} className = "mt-3">
    <InputGroup className="mb-2">
      <Form.Control 
        type="text"
        defaultValue={edit.value}
        onChange={handleUpdate}
        placeholder="Enter Your Task..."
      />
      <InputGroup.Append>
        <Button type = "submit" variant="outline-secondary">Edit</Button>
      </InputGroup.Append>
    </InputGroup>
  </form>
  }

  return (
    <>
    <Card>
      <ListGroup variant="flush">
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Checkbox 
            aria-label="Checkbox for following text input"
            checked={todo.complete}
            onChange = {handleClick}
          />
        </InputGroup.Prepend>
        <ListGroup id={todo.id} key={todo.id} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
          <ListGroup.Item variant="secondary">
          {todo.task}
          </ListGroup.Item>
        </ListGroup>
        <InputGroup.Append>
          <Button variant="outline-secondary" 
            onClick={() => setEdit({id: todo.id, value: todo.task})} >
            Edit
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </ListGroup>
  </Card>
  </>
  )
}

export default ToDo 