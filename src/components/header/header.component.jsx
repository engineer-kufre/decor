import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        DECO`R
      </Link>
      <div className="options">
        <Link className="option" to='/shop'>
          SHOP
        </Link>
        <Link className="option" to='/contact'>
          CONTACT
        </Link>
      </div>
    </div>
  )
}

export default Header
