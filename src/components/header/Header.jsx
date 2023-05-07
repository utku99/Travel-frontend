import React, { useState } from 'react'
import "./header.css"
import { Link } from 'react-router-dom';
import "./headerItems"
import { headerItems } from './headerItems';


const Header = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Tour</h1>
        <div className='menu-icons' onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {
            headerItems.map((item, i) => (
              <li key={i}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            )
            )
          }
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>

        </ul>
      </nav>

    </>
  )
}

export default Header
