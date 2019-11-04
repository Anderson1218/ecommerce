import React from "react";
import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <>
      <div className="checkout-item">
        <div className="image-container">
          <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
            &#10095;
          </div>
        </span>
        <span className="price">{price}</span>
        <div
          className="remove-button"
          onClick={() => dispatch(clearItemFromCart(cartItem))}
        >
          &#10005;
        </div>
      </div>
      <style jsx>
        {`
          .checkout-item {
            width: 100%;
            display: flex;
            min-height: 100px;
            border-bottom: 1px solid darkgrey;
            padding: 15px 0;
            font-size: 20px;
            align-items: center;
            z-index: 1;
          }
          .image-container {
            width: 23%;
            padding-right: 15px;
          }
          img {
            width: 100%;
            height: 100%;
            max-height: 250px;
          }
          .name,
          .quantity,
          .price {
            width: 23%;
          }

          .quantity {
            padding-left: 20px;
            display: flex;
          }
          .arrow {
            cursor: pointer;
          }

          .value {
            margin: 0 10px;
          }

          @media screen and (max-width: 991px) {
            .price {
              display: none;
            }
            .remove-button {
              display: none;
            }
            .quantity {
              margin-left: 2em;
            }
          }

          .remove-button {
            padding-left: 12px;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default CheckoutItem;
