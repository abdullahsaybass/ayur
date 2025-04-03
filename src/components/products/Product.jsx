import React from "react";
import "./Product.css";
import MaxxForMen from '../../assets/1.png';
import MaxxForWomen from '../../assets/2.png';
import TestoVital from '../../assets/3.png';
import HimalayanShilajit from '../../assets/4.png';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const products = [
  {
    id: 1,
    name: "Maxx For Men (325g)",
    image: MaxxForMen, // Replace with actual image URL
    oldPrice: "2,999.00",
    newPrice: "2,799.00",
    rating: 5,
    reviews: 6,
    sale: true,
  },
  {
    id: 2,
    name: "Maxx For Women (325g)",
    image: MaxxForWomen,
    oldPrice: "2,999.00",
    newPrice: "2,799.00",
    rating: 5,
    reviews: 1,
    sale: true,
  },
  {
    id: 3,
    name: "Testo Vital (60 Capsules)",
    image: TestoVital,
    oldPrice: "999.00",
    newPrice: "599.00",
    rating: 5,
    reviews: 1,
    sale: true,
  },
  {
    id: 4,
    name: "Himalayan Shilajit (30g)",
    image: HimalayanShilajit,
    oldPrice: "1,299.00",
    newPrice: "999.00",
    rating: 5,
    reviews: 1,
    sale: true,
  },
];

const HomeProduct = () => {
  return (
    <div>
   
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
  );
};

export default HomeProduct;
