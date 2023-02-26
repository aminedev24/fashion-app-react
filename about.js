import React from 'react';



import Map from './map';

//import { Circle } from "leaflet/src/layer/vector/Circle";

//import { AttributionControl, LayerGroup,Pane, ImageOverlay,FeatureGroup ,Polyline} from "leaflet";
const About = () => {
  const position = [51.505, -0.09]; // replace with your store location coordinates
  return (
    <div>
    <div id='about' className="about-container">
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
      
    
   </div>
  
   </div>
  );
};

export default About;
