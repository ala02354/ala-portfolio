import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <NavLink to="/" className="logo" onClick={closeMenu}>
          ALA<span>.DEV</span>
        </NavLink>

        {/* Bouton hamburger */}
        <button 
          className={`hamburger ${isMenuOpen ? "open" : ""}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Menu de navigation */}
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/experience" onClick={closeMenu}>Experience</NavLink>
          <NavLink to="/education" onClick={closeMenu}>Education</NavLink>
          <NavLink to="/cv" onClick={closeMenu}>CV</NavLink>
          <NavLink to="/contact" className="contact-link" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;