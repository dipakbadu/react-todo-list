import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({toDoList, handleToggle, handleFilter, updateTodo}) => {
  return (
    <div>
      {toDoList.map(todo => {
        return (
          <div> 
            <ToDo todo = {todo} key={todo.id} updateTodo={updateTodo} handleToggle = {handleToggle} handleFilter = {handleFilter} />
          </div>
        )
      })}
      <button style={{margin: '20px'}} key = {toDoList.id} onClick={handleFilter}>Clear Completed</button>
    </div>
  )
}
export default ToDoList