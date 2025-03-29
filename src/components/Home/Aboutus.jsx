import React from "react";
import "./About.css";

const services = [
  {
    icon: "🌿",
    title: "Herbal Supplements",
    description: "Boost your health naturally with our premium herbal supplements.",
  },
  {
    icon: "🍵",
    title: "Detox Teas",
    description: "Cleanse your body with our specially formulated herbal detox teas.",
  },
  {
    icon: "🛀",
    title: "Aromatherapy Oils",
    description: "Relax and rejuvenate with our range of essential aromatherapy oils.",
  },
  {
    icon: "🍯",
    title: "Organic Honey",
    description: "Enjoy the purest organic honey sourced from natural farms.",
  },
  {
    icon: "🌱",
    title: "Superfoods",
    description: "Enhance your diet with nutrient-rich superfoods for a healthier life.",
  },
  {
    icon: "💊",
    title: "Immunity Boosters",
    description: "Strengthen your immune system with our herbal immunity boosters.",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h3 className="subtitle">What We Offer</h3>
      <h2 className="title">Natural Wellness for a Healthier Life</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="learn-more">Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
