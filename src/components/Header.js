import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='Header'>
      <h1>Redux-Toolkit</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <Link to='post'>Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header