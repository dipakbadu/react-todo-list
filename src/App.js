import Header from './components/Header'
import React, {useState} from 'react'
import data from './data.json'
import ToDOList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import Container from 'react-bootstrap/Container'


function App() {
  const [ toDoList, setToDoList ] = useState(data)

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  const updateTodo = (todoId, newTask) => {
    // let aa = prev =>prev.map(item =>(item.id) === todoId ? newTask : item)
    let aa = toDoList.map(item => {
      return (item.id) === todoId ? { id: item.id, task: newTask, complete: item.complete } : item;
    });
    setToDoList(aa)
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const addTask = (userInput) => {
    let copy = [...toDoList]
    copy = [...copy, {id:toDoList.length + 1, task: userInput, complete: false}]
    setToDoList(copy)
  }
  return (    
    <Container className = "mt-3">
      <Header />
      <ToDoForm addTask = {addTask} />
      <ToDOList  toDoList = {toDoList} updateTodo = {updateTodo} handleToggle = {handleToggle} handleFilter = {handleFilter} />
    </Container>
  );
}

export default App;
