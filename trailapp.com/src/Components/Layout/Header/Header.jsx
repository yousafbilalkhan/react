import React, { useState } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Images/e641777b-1fd1-45af-842a-1535347500c1.png';
import ArrowDown from '../../../Assets/Icons/keyboard_arrow_down_25dp_000_FILL0_wght400_GRAD0_opsz24.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let enterTimeout, leaveTimeout;

  const handleMouseEnter = () => {
    clearTimeout(leaveTimeout);
    enterTimeout = setTimeout(() => {
      setIsDropdownOpen(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    clearTimeout(enterTimeout);
    leaveTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500);
  };


  return (

    <header>
      <div className="header-first-column">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <div className="header-second-column">
        <ul className="menu-list">
          <li className="menu-item"><Link className="link" to="/">Why Trail?</Link></li>
          <li
            className="menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            How it works <img src={ArrowDown} />
            {isDropdownOpen && (
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li className="dropdown-item"><Link className="link" to="/">Features</Link></li>
                  <li className="dropdown-item"><Link className="link" to="/">Integrations</Link></li>
                  <li className="dropdown-item"><Link className="link" to="/">Restaurants</Link></li>
                  <li className="dropdown-item"><Link className="link" to="/">Hotels</Link></li>
                  <li className="dropdown-item"><Link className="link" to="/">Retail</Link></li>
                  <li className="dropdown-item"><Link className="link" to="/">Bakeries</Link></li>
                  <li className="dropdown-item"><Link className="link" to="/">Cafes</Link></li>
                  <li className="dropdown-item"><Link className="link" to="/">Gyms and spas</Link></li>
                  <li className="dropdown-item"><Link className="link" to="/">Schools</Link></li>
                </ul>
              </div>
            )}
          </li>

          <li className="menu-item"><Link className="link" to="/">Customers</Link></li>
          <li className="menu-item"><Link className="link" to="/">Pricing</Link></li>
          <li className="menu-item"><Link className="link" to="/">Blog</Link></li>
        </ul>
      </div>
      <div className="header-third-column">
        <ul>
          <li><Link to="/">Log in</Link></li>
        </ul>
        <button>Start Free Trial</button>
      </div>

    </header>

  )
}

export default Header