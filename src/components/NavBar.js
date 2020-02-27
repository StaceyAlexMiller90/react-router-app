import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <ul>
      <li>
      <NavLink activeStyle={{fontWeight: "bold",color: "red"}} exact to='/'>Home</NavLink>
      </li>
      <li>
      <NavLink activeStyle={{fontWeight: "bold",color: "red"}} exact to="/AboutPage">About</NavLink>
      </li>
      <li>
      <NavLink activeStyle={{fontWeight: "bold",color: "red"}} exact to="/DiscoverMoviesPage">Discover Movies</NavLink>
      </li>
    </ul>
  )
}

export default NavBar