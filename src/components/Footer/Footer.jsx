import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <h3>Green-Gold</h3>
        </div>

        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">All Products</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Checkout</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Wholesale/Practitioner Application</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Policies</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Delivery Policy</a></li>
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Quality Assurance</a></li>
            <li><a href="#">Our Return Policy</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h4>Sign Up for our NEWSLETTER!</h4>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
          </div>
          <button className="follow-btn">Follow on shop</button>
          <div className="payment-options">
            <img src="visa.png" alt="Visa" />
            <img src="mastercard.png" alt="MasterCard" />
            <img src="paypal.png" alt="PayPal" />
            <img src="afterpay.png" alt="Afterpay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
