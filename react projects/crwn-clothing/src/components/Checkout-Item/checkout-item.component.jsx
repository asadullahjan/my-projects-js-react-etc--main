import "../Checkout-Item/checkout-item.styles.scss";

const CheckoutItem = ({cartItem}) => {
  const { name,imageUrl, price, quantity,  } = cartItem;

  return(
    <div className="checkout-item-container">
    <div className="image-container">
      <img src={imageUrl} alt={`${name}`} />
    </div>
    <span className ="name">{name}</span>
    <span className ="quantity">
      <i className ='fas fa-angle-left arrow' ></i>
      <span className="quantity">{quantity}</span>
      <i className ='fas fa-angle-right arrow'  ></i>
    </span>
    <span className="price">$ {price}</span>
    <i className ='fas fa-times remove-button'></i>

    </div>
  )
  
};

export default CheckoutItem;
