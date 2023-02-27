import React, { useState } from "react";
import products from "./productsObj";
import useFeaturedProductsData from "./data";
import { useContext } from "react";
import { CartContext } from "./cartContext";
import Sidebar from "./sidebar";

const FeaturedProducts = () => {
  const {
    category,
    currentPage,
    itemsPerPage,
    allProducts,
    selectedProducts,
    totalPages,
    startIndex,
    endIndex,
    currentItems,
    isAnimated,
    setIsAnimated,
    categories,
    sizes,
    activeCategory,
    setActiveCategory,
    isHovered,
    setIsHovered,
    handlePrevClick,
    handleNextClick,
    handleCategoryClick,
    handleImageAnimation,
    handleBoxClose,
  } = useFeaturedProductsData();

  const { addItemToCart } = useContext(CartContext);

  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (category) => {
    setActiveTab(category);
    setActiveCategory(category);
  };

  return (
    <div className="categories">
      <h2>Browse by categories</h2>
      <div className="category-image">
        <img src="img/category1.jpg" alt="Category1" className="category-left-image" />
        <img src="img/category2.jpg" alt="Category2" className="category-right-image" />
      </div>
      <div className="category-tabs">
        {categories.map((category, index) => (
          <button
            className={`category-tab ${activeTab === category ? "active" : ""}`}
            key={`${category}-${index}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    
      <div className="category-title">{category ? `${category} Products` : "All products"}</div>
      <div className="size-buttons">
        <h4>Browse by size</h4>
        <div className="btns">
          {sizes.map((size) => (
            <button className="category-btn btn-sm" key={size}>
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className={`products ${isAnimated ? "fade-In" : ""}`}>
        {selectedProducts.map((product) => (
          <div className={`product ${isAnimated ? "fade-In" : ""}`} key={product.id}>
            <div className="product-image-container">
              <img
                className={`product-image ${isHovered ? "zoom" : ""} ${category === "underwear" ? "underwear" : ""}`}
                alt={product.name}
                src={product.image}
                id={`${product.id}`}
                onMouseEnter={handleImageAnimation}
                onMouseLeave={category === "underwear" ? handleBoxClose : null}
              />
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="product-action-container">
              <button className="product-action-button" onClick={() => addItemToCart(product)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button disabled={currentPage === 1} onClick={handlePrevClick}>
          Prev
        </button>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
