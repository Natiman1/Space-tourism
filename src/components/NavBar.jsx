import { NavLink } from "react-router-dom"
import logo from '/assets/shared/logo.svg'

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <span className="line"></span>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
         <span className="nav_no">00</span> Home
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <span className="nav_no">01</span> Destination
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <span className="nav_no">02</span> Crew
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <span className="nav_no">03</span> Technology
        </NavLink>
      </div>

    </nav>
  )
}

export default NavBar