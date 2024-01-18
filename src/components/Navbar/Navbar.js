import React from 'react';
import './Navbar.css'

const Navbar = (props) => {
  return (
    <header className='nav-bar-container'>
      <nav className='nav-items'>
        <ul>
            <li onClick={() => props.onClick('ABOUT')}>About</li>
            <li onClick={() => props.onClick('SKILLS')}> Skills</li>
            <li onClick={() => props.onClick('EXPERIENCE')}>Experience</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
