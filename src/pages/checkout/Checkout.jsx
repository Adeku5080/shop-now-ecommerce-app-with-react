import React  from "react";

import { useSelector,useDispatch } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cartSelector";
import { addToCart, removeFromCart } from '../../store/cart/cartAction';
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import './checkout.styles.scss';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="checkout-container">
       <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>
        <div className="header-block">
          <span>description</span>
        </div>
        <div className="header-block">
          {" "}
          <span>quantity</span>
        </div>
        <div className="header-block">
          {" "}
          <span>price</span>
        </div>
        <div className="header-block">
          {" "}
          <span>remove</span>
        </div> 
      </div>
      
        {cartItems?.map((cartItem) => (
          <CheckoutItem key ={cartItem.id} cartItem={cartItem}/>
        ))}
      <span className="total">{cartTotal}</span>
    </div>
  );    
};

export default Checkout;
