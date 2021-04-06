import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header () {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          To Do List
        </Navbar.Brand>
      </Navbar>
    </>
      )
    }
    export default Header