import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export const Navbar = () => {
  return (
    <div>
        <Link to="/">
            <img src={logo} alt="logo"></img>
        </Link>
    </div>
  )
}
