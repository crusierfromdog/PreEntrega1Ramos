import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Retornables</h1>
        <nav>
            <ul>
                <li>Coca Cola</li>
                <li>Fanta</li>
                <li>Canada Dry</li>
                <li>Sprite!</li>
            </ul>
            <CartWidget/>  
        </nav>
    </header>
  )
}

export default NavBar