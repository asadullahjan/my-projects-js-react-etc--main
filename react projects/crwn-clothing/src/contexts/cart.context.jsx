import { useEffect } from "react";
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

const decreaseCartItem = (cartItems, productToDecrease) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDecrease.id
  );

  if (existingCartItem.quantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDecrease.id);
  }

  // decrement
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToDecrease.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }
};

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((product) => product.id !== productToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  decreaseItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItems, productToAdd));
  };
  const decreaseItemFromCart = (productToDecrease) => {
    setCartItem(decreaseCartItem(cartItems, productToDecrease));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItem(removeCartItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    decreaseItemFromCart,
    removeItemFromCart,
    cartItems,
    cartCount,
    setCartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
