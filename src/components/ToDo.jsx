import React from 'react'
import './style.css'
import ListGroup from 'react-bootstrap/ListGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const ToDo = ({todo, handleToggle}) => {

  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }
  const handleEditSubmit = () => {
    console.log(todo.task)
  }
  return (
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
      <Button variant="outline-secondary" onClick={handleEditSubmit} >Edit</Button>
    </InputGroup.Append>
  </InputGroup>
  )
}

export default ToDo 