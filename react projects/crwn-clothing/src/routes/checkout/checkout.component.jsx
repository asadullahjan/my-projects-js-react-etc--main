import '../checkout/checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/Checkout-Item/checkout-item.component';



const CheckOut = () => {
  const {cartItems} = useContext(CartContext);
return (
  <div className='checkout-container '>
    <div className='checkout-header'>
      <span className='header-block'>Product</span>
      <span className='header-block'>Description</span>
      <span className='header-block'>Quantity</span>
      <span className='header-block'>Price</span>
      <span className='header-block'>Remove</span>
    </div>
    <div>
      {/*map through items array and draw checkout items*/}
      {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
    </div>
  </div>
)
}

export default  CheckOut;