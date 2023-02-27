import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8T1vOaDohYIaSqkOzbb1_ufYUyy24-rJmbg&usqp=CAU" alt="Discount image" />
      <div className="banner-text">
        <h1>Huge Discount</h1>
        <h2>20% discount on all products</h2>
        <a href="#" className="button">Visit our page</a>
      </div>
     
    </div>
  );
};

export default Banner;
