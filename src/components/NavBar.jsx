import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import logo from '/assets/shared/logo.svg'
import hamburger from '/assets/shared/icon-hamburger.svg'
import close from '/assets/shared/icon-close.svg'

// import { useMediaQuery } from 'react-responsive';

const NavBar = () => {

  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 375px)' });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <span className="line"></span>
      <img onClick={toggleMenu} src={isOpen ? close : hamburger} alt="Nav icon" className="menu-name" />
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          onClick={handleLinkClick}
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <span className="nav_no">00</span> Home
        </NavLink>
        <NavLink
          to="/destination"
          onClick={handleLinkClick}
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <span className="nav_no">01</span> Destination
        </NavLink>
        <NavLink
          to="/crew"
          onClick={handleLinkClick}
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <span className="nav_no">02</span> Crew
        </NavLink>
        <NavLink
          to="/technology"
          onClick={handleLinkClick}
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <span className="nav_no">03</span> Technology
        </NavLink>
      </div>

    </nav>
  )
}

export default NavBar