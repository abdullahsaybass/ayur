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
    name: "Ashwagandha (60 Capsules)",
    image: MaxxForMen, // Replace with actual image URL
    oldPrice: "699.00",
    newPrice: "599.00",
    rating: 5,
    reviews: 6,
    sale: true,
  },
  {
    id: 2,
    name: "Gokshura (60 Capsules)",
    image: MaxxForWomen,
    oldPrice: "499.00",
    newPrice: " 299.00",
    rating: 5,
    reviews: 1,
    sale: true,
  },
  {
    id: 3,
    name: "Moringa (60 Capsules)",
    image: TestoVital,
    oldPrice: "499.00",
    newPrice: "299.00",
    rating: 5,
    reviews: 1,
    sale: true,
  },
  {
    id: 4,
    name: "Shatavari (60 Capsules)",
    image: HimalayanShilajit,
    oldPrice: "399.00",
    newPrice: "299.00",
    rating: 5,
    reviews: 1,
    sale: true,
  },
  {
    id: 5,
    name: "Testo Vital (60 Capsules)",
    image: HimalayanShilajit,
    oldPrice: "999.00",
    newPrice: "599.00",
    rating: 5,
    reviews: 1,
    sale: true,
  },
  {
    id: 4,
    name: "Triphala (60 Capsules)",
    image: HimalayanShilajit,
    oldPrice: "499.00",
    newPrice: "299.00",
    rating: 5,
    reviews: 1,
    sale: true,
  },
];

const HerbalCapsule = () => {
  return (
    <section className="HerbalCapsule-container">
      <Header />
        
        <div className="Capsule">
            <h1>HERBAL Capsule</h1>
        </div>
        <div className="Capsueling">
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

export default HerbalCapsule;
