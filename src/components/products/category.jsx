import React from "react";
import "./category.css";

// Import images from assets
import amla from "../../assets/11.png";
import ashwagandha from "../../assets/12.png";
import bhringaraj from "../../assets/13.png";
import brahmi from "../../assets/14.png";
import neem from "../../assets/15.png";
import shatavari from "../../assets/16.png";
import tulsi from "../../assets/17.png";
import triphala from "../../assets/18.png";
import turmeric from "../../assets/19.png";
import saffron from "../../assets/10.png";

const categories = [
  { name: "Amla", image: amla },
  { name: "Ashwagandha", image: ashwagandha },
  { name: "Bhringaraj", image: bhringaraj },
  { name: "Brahmi", image: brahmi },
  { name: "Neem", image: neem },
  { name: "Shatavari", image: shatavari },
  { name: "Tulsi", image: tulsi },
  { name: "Triphala", image: triphala },
  { name: "Turmeric", image: turmeric },
  { name: "Saffron", image: saffron }
];

const ShopCategories = () => {
  return (
    <div className="shop-categories">
      <h2 className="title">Shop by Categories</h2>
      <div className="filter-buttons">
        <button className="active">Popular Herbs</button>
        <button>Natural Oils</button>
        <button>Wellness Care</button>
      </div>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-item" key={index}>
            <div className="category-img">
              <img src={category.image} alt={category.name} />
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;
