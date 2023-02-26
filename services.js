import React from 'react';
//import './ServicesContainer.css';

const ServicesContainer = () => {
  return (
    <div className="services-container">
      <div className="services-box">
        <i className="fas fa-shipping-fast"></i>
        <h3>Shipping available</h3>
        <p>Get your items shipped directly to your door.</p>
      </div>
      
      <div className="services-box">
        <i className="fas fa-truck-loading"></i>
        <h3>Fast Delivery</h3>
        <p>Get your order delivered within 2-3 days.</p>
      </div>
      <div className="services-box">
        <i className="fas fa-check-circle"></i>
        <h3>Quality Guarantee</h3>
        <p>We guarantee the quality of all our products.</p>
      </div>
    </div>
  );
};

export default ServicesContainer;
