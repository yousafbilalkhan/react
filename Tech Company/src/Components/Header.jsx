import React from 'react'
import "../Styles/Header.css";
import { Link } from 'react-router-dom';
import logo from '../Images/technology_4257487.png';

const Header = () => {
  return (

    <header>
      <div className="header-first-column">
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div> 
      <div className="header-second-column">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </div>
    </header>

  )
}

export default Header