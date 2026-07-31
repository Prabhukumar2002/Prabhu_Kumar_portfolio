import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Skills", id: "skills" },
    { title: "Projects", id: "projects" },
    { title: "Contact", id: "contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar-custom">
      <div className="container navbar-container">

        {/* Logo */}
        <a href="#home" className="logo">
          Prajwal D R
        </a>

        {/* Navigation */}
        

        {/* Theme + Menu */}
        <div className="navbar-actions">
          <div className={`nav-right ${menuOpen ? "active" : ""}`}>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={closeMenu}>
                  <h5>{item.title}</h5>
                </a>
              </li>
            ))}
          </ul>
        </div>

          <ThemeToggle />

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;