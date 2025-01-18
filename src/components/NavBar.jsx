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
          00 Home
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          01 Destination
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          02 Crew
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          03 Technology
        </NavLink>
      </div>

    </nav>
  )
}

export default NavBar