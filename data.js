import { useState, useEffect } from "react";
import products from "./productsObj";

const useFeaturedProductsData = () => {
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const allProducts = Object.values(products).flat();
  const selectedProducts = category ? products[category] : allProducts;
  const totalPages = Math.ceil(selectedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = selectedProducts.slice(startIndex, endIndex);
  const [isAnimated, setIsAnimated] = useState(false);
  const categories = ['all', 'button', 'short', 'underwear'];
  const sizes = ['M','L','Xl','XXL']
  const [activeCategory, setActiveCategory] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1)
    setIsAnimated(true);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    setIsAnimated(true);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setItemsPerPage(8);
        
      } else {
        setItemsPerPage(2);
        
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (category) => {
    if (category === 'all') {
      setCategory('');
    } else {
      setCategory(category);
    }
    setCurrentPage(1);
  
    if (activeCategory === category) {
      setActiveCategory('');
    } else {
      setActiveCategory(category);
    }
    setIsAnimated(true);
  };
  
  const handleImageAnimation = (event) => {
    event.target.src = "/img/victoriaOpen.jpg";
  };

  const handleBoxClose = (event) => {
    event.target.src = '/img/victoriaClose.jpg'
  };

  return {
    category,
    setCategory,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
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
    handleMouseEnter,
    handleMouseLeave,
    handlePrevClick,
    handleNextClick,
    handleCategoryClick,
    handleImageAnimation,
    handleBoxClose
  };
};

export default useFeaturedProductsData;
