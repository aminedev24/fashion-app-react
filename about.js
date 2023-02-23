import React from 'react';
import { MapContainer, TileLayer, Popup,Marker } from "https://unpkg.com/leaflet@1.9.3/dist/leaflet.js";

const About = () => {
  const position = [51.505, -0.09]; // replace with your store location coordinates
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About Our Store</h2>
        <p>
          Welcome to our women's clothing store! We offer a wide range of
          clothing and accessories that are both stylish and affordable. Our
          mission is to provide our customers with high-quality products and
          excellent customer service. Browse our collection online or visit us
          in-store today!
        </p>
        <h3>Our Location</h3>
        <p>
          Come visit us at our store located at 123 Main Street. We're open
          Monday-Saturday from 10am-8pm and Sunday from 12pm-6pm.
        </p>
      </div>
      <div className="about-map">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              <p>Our store is located here!</p>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default About;
