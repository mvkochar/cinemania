import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header d-f jc-sb align-center">
        <div className="header-logo"><img src="images/logo.svg" alt="logo" /></div>
        <nav>
            <ul className="header-nav-list d-f">
                <li><Link to="/">Home</Link></li>
                <li><Link to="catalog">Catalog</Link></li>
                <li><Link to="library">My Library</Link></li>
            </ul>
        </nav>
        <div><img src="images/switch.png" alt="switch" /></div>    
    </header>
  )
}

export default Header