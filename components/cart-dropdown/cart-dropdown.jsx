import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import CartIcon from "../cart-icon/cart-icon";
import { NavDropdown } from "react-bootstrap";
import Router from "next/router";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsContainer
} from "./cart-dropdown.styles";

const CartDropdown = props => {
  const cartItems = useSelector(selectCartItems);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavDropdown
      title={<CartIcon />}
      alignRight
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      show={isOpen}
      {...props}
    >
      <CartDropdownContainer>
        <CartItemsContainer>
          {cartItems && cartItems.length ? (
            cartItems.map(cartItem => (
              <NavDropdown.Item key={cartItem.id}>
                <CartItem item={cartItem} />
              </NavDropdown.Item>
            ))
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItemsContainer>
        <CustomButton
          onClick={() =>
            Router.push({
              pathname: "/checkout"
            })
          }
          inverted
        >
          來去結帳
        </CustomButton>
      </CartDropdownContainer>
    </NavDropdown>
  );
};

export default CartDropdown;
