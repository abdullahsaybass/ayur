import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          {/* Logo inside menu (for mobile view) */}
          <div className="menu-logo">
            <img src={logo} alt="Logo" className="menu-logo-img" />
            <span className="brand-name">Green-Gold</span>
          </div>

          <ul>
              <li><Link to="/">HOME</Link></li>
            <li>
              <Link to="/product">PRODUCT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/pages">PAGES</Link>
            </li>
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
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
