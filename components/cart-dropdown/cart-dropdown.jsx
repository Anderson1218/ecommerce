import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import CartIcon from "../cart-icon/cart-icon";
import { NavDropdown } from "react-bootstrap";
import Router from "next/router";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <>
      <NavDropdown title={<CartIcon />} alignRight>
        <div className="cart-dropdown">
          <div className="cart-items">
            {cartItems && cartItems.length ? (
              cartItems.map(cartItem => (
                <NavDropdown.Item>
                  <CartItem key={cartItem.id} item={cartItem} />
                </NavDropdown.Item>
              ))
            ) : (
              <span className="empty-message">Your cart is empty</span>
            )}
          </div>
          <CustomButton
            onClick={() =>
              Router.push({
                pathname: "/checkout"
              })
            }
          >
            CHECKOUT
          </CustomButton>
        </div>
      </NavDropdown>
      <style jsx>{`
        .cart-dropdown {
          min-width: 240px;
          max-width: 500px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          padding: 20px;
          background-color: white;
        }
        .empty-message {
          font-size: 1.2rem;
          margin: 25% auto;
        }

        .cart-items {
          height: 240px;
          display: flex;
          flex-direction: column;
          overflow: scroll;
        }
      `}</style>
    </>
  );
};

export default CartDropdown;
