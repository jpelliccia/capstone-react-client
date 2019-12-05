import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/exercises'>Exercise Log</NavLink>
    <NavLink to='/create-exercise'>Create Exercises</NavLink>
  </nav>
)

export default Nav
