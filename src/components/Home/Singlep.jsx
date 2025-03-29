import React from 'react';
import {
  FaLeaf,
  FaHandHoldingHeart,
  FaRunning,
  FaBolt,
  FaBalanceScale,
  FaBrain
} from 'react-icons/fa';
import singlep from '../../assets/1.png'
import './Singlep.css';

const HerbalProduct = () => {
  return (
    <div className="container">
      <div className="info-container">
        {/* Left Section: Headline + Two Columns of Benefits */}
        <div className="info-section">
          <h1 className="main-heading">Fuel Your Workouts, Accelerate Your Recovery</h1>
          <div className="benefits-row">
            {/* First Column of Benefits */}
            <ul className="benefits-list">
              <li>
                <FaLeaf className="icon" />
                <div>
                  <strong>Natural Power:</strong> Boost your energy and vitality with premium herbal blends.
                </div>
              </li>
              <li>
                <FaHandHoldingHeart className="icon" />
                <div>
                  <strong>Holistic Wellness:</strong> Support overall health with natural remedies for mind, body, and spirit.
                </div>
              </li>
              <li>
                <FaRunning className="icon" />
                <div>
                  <strong>Men’s Vitality:</strong> Revitalize your energy with supplements designed for men’s health.
                </div>
              </li>
            </ul>
            {/* Second Column of Benefits */}
            <ul className="benefits-list">
              <li>
                <FaBolt className="icon" />
                <div>
                  <strong>Pure Strength:</strong> Enhance muscle growth, recovery, and strength with potent herbal ingredients.
                </div>
              </li>
              <li>
                <FaBalanceScale className="icon" />
                <div>
                  <strong>Balanced Health:</strong> Achieve balanced health with products that support mental clarity and physical well-being.
                </div>
              </li>
              <li>
                <FaBrain className="icon" />
                <div>
                  <strong>Smart Recovery:</strong> Recover faster and restore your well-being with nature-based formulas.
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Right Section: Product Image */}
        <div className="image-section">
          <img
            src={singlep}
            alt="Herbal Products"
            className="product-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HerbalProduct;
