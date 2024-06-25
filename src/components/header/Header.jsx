
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import logo_top from "../../img/Logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="wrapper">
      <div className={`header ${isOpen ? 'open' : ''}`}>
        <Link className="logo" to="/">
          <img className="img-logo" src={logo_top} alt="logo" />
        </Link>
        <button className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about">About</Link>
            </li>
            <li className={location.pathname === '/projects' ? 'active' : ''}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'active' : ''}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link className="in" to="https://www.linkedin.com/in/yana-bilous-6270b9194/" target="_blank">
            in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

