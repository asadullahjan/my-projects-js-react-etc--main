import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contain productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // increment if present
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  // cartItems.map((cartItem) => {
  //   if(cartItem.id === productToAdd.id){
  //     return {...cartItem, quantity: cartItem.quantity + 1}
  //   }else{
  //     return cartItem
  //   }
  // })
  

  //return new array with modified cartItems/new items
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen , addItemToCart , cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
