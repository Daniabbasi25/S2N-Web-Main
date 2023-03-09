import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navstyle.css'
function CustomeNav() {
  const navigate=  useNavigate()
    return (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a onClick={()=>navigate('/')} href="/">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    );
}

export default CustomeNav