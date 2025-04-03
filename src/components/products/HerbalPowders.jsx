import React from "react";
import "./HerbalPowder.css";
import MaxxForMen from '../../assets/1.png';
import MaxxForWomen from '../../assets/2.png';
import TestoVital from '../../assets/3.png';
import HimalayanShilajit from '../../assets/4.png';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const products = [
  {
    id: 1,
    name: "Ashwagandha Powder (100 g)",
    image: MaxxForMen, // Replace with actual image URL
    oldPrice: "399.00",
    newPrice: "299.00",
    rating: 5,
    reviews: 6,
    sale: true,
  },
  {
    id: 2,
    name: "Gokshura Powder (100 g)",
    image: MaxxForWomen,
    oldPrice: "Rs. 399.00",
    newPrice: " Rs. 299.00",
    rating: 5,
    reviews: 1,
    sale: true,
  },
  {
    id: 3,
    name: "Moringa Powder (100 g)",
    image: TestoVital,
    oldPrice: "299.00",
    newPrice: "199.00",
    rating: 5,
    reviews: 1,
    sale: true,
  },
  {
    id: 4,
    name: "Safed Musli Powder (100g)",
    image: HimalayanShilajit,
    oldPrice: "399.00",
    newPrice: "299.00",
    rating: 5,
    reviews: 1,
    sale: true,
  },
  {
    id: 5,
    name: "Shatavari Powder (100 g)",
    image: HimalayanShilajit,
    oldPrice: "399.00",
    newPrice: "299.00",
    rating: 5,
    reviews: 1,
    sale: true,
  },
  {
    id: 4,
    name: "Triphala Powder (100 g)",
    image: HimalayanShilajit,
    oldPrice: "499.00",
    newPrice: "299.00",
    rating: 5,
    reviews: 1,
    sale: true,
  },
];

const HerbalPowder = () => {
  return (
    <section className="HerbalPowder-container">
      <Header />
        <div className="Powder">
            <h1>HERBAL POWDER</h1>
        </div>
        <div className="Powdering">
          <div className="product-grid">
              {products.map((product) => (
                  <div key={product.id} className="product-card">
                  {product.sale && <span className="sale-badge">Sale</span>}
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-details">
                      <h3 className="product-name">{product.name}</h3>
                      <div className="product-rating">
                      {"★".repeat(product.rating)}{" "}
                      <span className="review-count">({product.reviews})</span>
                      </div>
                      <p className="product-price">
                      <span className="old-price">Rs. {product.oldPrice}</span> Rs. {product.newPrice}
                      </p>
                      <button className="add-to-cart">Add to cart</button>
                  </div>
                  </div>
              ))}
          </div>
        </div>
      <Footer />
    </section>
  );
};

export default HerbalPowder;
