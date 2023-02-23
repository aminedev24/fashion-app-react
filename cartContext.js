import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addItemToCart = (item) => {
  const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);

  if (itemExists) {
    // item already exists in cart, do not add it again
    return;
  } else {
    const newCartItems = [...cartItems, { ...item, quantity: 1}];
    setCartItems(newCartItems);
    setCartItemCount(cartItemCount + 1);
    //updateCartTotal(newCartItems); // call updateCartTotal to update cart total
  }
};

const removeItemFromCart = (item) => {
  const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
  setCartItems(newCartItems);
  setCartItemCount(cartItemCount - 1);
  //updateCartTotal(newCartItems); // call updateCartTotal to update cart total
};


  /*
  const updateCartTotal = () => {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });
  setCartTotal(total);
};
*/

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        cartTotal,
        //updateCartTotal,
        cartItemCount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
