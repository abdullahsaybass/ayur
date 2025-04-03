import React from "react";
import './ContactForm.css';

const ContactForm = () => {
  return (
   <section className="contact-us">
        <div className="contact-container">
        {/* Left Side - Contact Information */}
        <div className="contact-info">
            <h5>Get in touch</h5>
            <h2>We Will Be in Touch Shortly</h2>
            <p>For questions, check our Quick Links or Policies as your query might already be answered. Otherwise, fill out the form below or.</p>
            
            <div className="info-item">
            <span className="icon">📍</span>
            <div>
                <h4>Location</h4>
                <p>Tharaikaadu, Pernambut,<br/>Vellore - TamilNadu</p>
            </div>
            </div>
            
            <div className="info-item">
            <span className="icon">✉️</span>
            <div>
                <h4>Email us</h4>
                <p>hr@green-gold.in<br/>hr@green-gold.in</p>
            </div>
            </div>
            
            <div className="info-item">
            <span className="icon">📞</span>
            <div>
                <h4>Call us</h4>
                <p>+91 99947 64301<br/>91 99947 65301</p>
            </div>
            </div>
        </div>
        
        {/* Right Side - Contact Form */}
        <div className="contact-form">
            <h5>Send us a message</h5>
            <h2>Have Other Questions?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            
            <form>
            <div className="form-group-row">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
            </form>
        </div>
        </div>
   </section>
  );
};

export default ContactForm;