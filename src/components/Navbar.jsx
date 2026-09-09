import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <NavLink to="/" className="logo">
          ALA<span>.DEV</span>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/cv">CV</NavLink>
          <NavLink to="/contact" className="contact-link">
            Contact
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;