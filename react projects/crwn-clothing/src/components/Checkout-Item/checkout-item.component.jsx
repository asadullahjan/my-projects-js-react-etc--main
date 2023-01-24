import "../Checkout-Item/checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({cartItem}) => {
  const { name,imageUrl, price, quantity,  } = cartItem;
  const {addItemToCart,decreaseItemFromCart,removeItemFromCart} = useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const decreaseItemHandler = () => decreaseItemFromCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return(
    <div className="checkout-item-container">
    <div className="image-container">
      <img src={imageUrl} alt={`${name}`} />
    </div>
    <span className ="name">{name}</span>
    <span className ="quantity">
      <i className ='fas fa-angle-left arrow' onClick={decreaseItemHandler} ></i>
      <span className="quantity">{quantity}</span>
      <i className ='fas fa-angle-right arrow' onClick={addItemHandler} ></i>
    </span>
    <span className="price">$ {price}</span>
    <i className ='fas fa-times remove-button' onClick={removeItemHandler} ></i>

    </div>
  )
  
};

export default CheckoutItem;
