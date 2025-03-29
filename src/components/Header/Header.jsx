import { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import "./Header.css";
import logo from "../../assets/logo-removebg.png";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="navbar-container">
        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand-name">Green-Gold</span>
        </div>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <ul>
            <li>HOME</li>
            <li>PRPDUCT</li>
            <li>CONTACT US</li>
            <li>ABOUT US</li>
            <li>PAGES</li>
          </ul>
        </nav>

        {/* Search and Cart */}
        <div className="right-section">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>
          <div className="cart-container">
            <FaShoppingCart className="cart-icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
