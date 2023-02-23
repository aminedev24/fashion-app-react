import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Banner from './banner';
import FeaturedProducts from './featured';
import { CartProvider } from './cartContext';
//import About from './about';

function Main() {
  const [notificationCount, setNotificationCount] = useState(0);

  return (
    <CartProvider>
      <div>
        <Navbar />
        <Banner />
        <FeaturedProducts category="button" />
        
      </div>
    </CartProvider>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
