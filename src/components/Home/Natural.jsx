import React from "react";
import "./Natural.css"; // Import the CSS file

const SupplementsSection = () => {
  return (
    <div className="supplements-container">
      {/* Top category cards */}
      <div className="categories">
        <div className="category-card">
            <span className="icon">💊</span>
            <div className="icon-containter">
                <h3>Health Supplements</h3>
                <p>Boost your immunity with natural supplements.</p>
            </div>
        </div>
        <div className="category-cards active">
        <div className="category-card">
            <span className="icon">🌿</span>
            <div className="icon-containter">
                <h3>Herbal Treatments</h3>
                <p>Organic herbal remedies for overall wellness.</p>
            </div>
        </div>
        </div>
        <div className="category-card">
            <span className="icon">🛍️</span>
            <div className="icon-containter">
                <h3>Organic Store</h3>
                <p>Find natural products for a healthier lifestyle.</p>
            </div>
        </div>
      </div>

      {/* Main section */}
      <div className="content">
        <div className="image-container">
          <div className="experience-badge">25+ Years Experience</div>
        </div>
        <div className="text-content">
          <h5>Who we are</h5>
          <h2>The perfect blend of nature and wellness.</h2>
          <p>
            We provide high-quality herbal supplements and organic products,
            crafted to enhance your well-being. Explore our range of
            scientifically backed, natural solutions.
          </p>
          <div className="features">
            <p>✅ Certified Herbal Products</p>
            <p>✅ 100% Organic Ingredients</p>
            <p>✅ Trusted by Experts</p>
            <p>✅ 24/7 Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplementsSection;