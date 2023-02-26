import React, { useContext, useState } from "react";
import { CartContext } from "./cartContext";

export const handleCartToggle = (setShowCart, showCart) => {
  setShowCart(!showCart);
};

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartItems, removeItemFromCart, cartItemCount, cartTotal, updateCartTotal } = useContext(CartContext);

  

  const handleAddToCart = (item) => {
    updateCartTotal();
  };

  const handleRemoveFromCart = (item) => {
    updateCartTotal();
  };
  
  // Calculate total items and total price
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);


  return (
    <div className="cart-icon">
      <i className="fas fa-shopping-cart" onClick={() => handleCartToggle(setShowCart, showCart)}/>
      <span className='notification-count'>{cartItemCount}</span>
      <div className={`cart-dropdown ${showCart ? "block" : ""}`}>
        {cartItems && cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button onClick={() => {
                      removeItemFromCart(item);
                      handleRemoveFromCart(item);
                    }}>Remove</button>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <p>Total Items: {totalItems}</p>
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        ) : (
          <div className="cart-item empty">Your cart is empty</div>
        )}
      </div>
    </div>
  );
};

//export {handleCartToggle};
export default Cart;
