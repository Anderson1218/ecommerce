import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import CartIcon from "../cart-icon/cart-icon";
import Router from "next/router";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsContainer
} from "./cart-dropdown.styles";
import { DropButton } from "grommet";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <DropButton
      dropAlign={{ top: "bottom", right: "right" }}
      dropContent={
        <CartDropdownContainer>
          <CartItemsContainer>
            {cartItems && cartItems.length ? (
              cartItems.map(cartItem => (
                <div key={cartItem.id}>
                  <CartItem item={cartItem} />
                </div>
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
      }
    >
      <CartIcon />
    </DropButton>
  );
};

export default CartDropdown;
