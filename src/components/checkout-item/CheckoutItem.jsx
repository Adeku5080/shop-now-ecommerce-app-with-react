import React from "react";
import "./checkout-item.styles.scss";
import { clearItemFromCart,addToCart,removeFromCart } from "../../store/cart/cartAction";
import { useDispatch } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
   const dispatch = useDispatch();
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        {" "}
        <img src={cartItem.imageUrl} alt={`${cartItem.name}`} />
      </div>

      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeFromCart(cartItem))}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={() => dispatch(addToCart(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
