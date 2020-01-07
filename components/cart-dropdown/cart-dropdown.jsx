import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartItemsCount
} from "../../redux/cart/cart.selectors";
import Router from "next/router";

import { Box, Stack, Text } from "grommet";
import { Cart } from "grommet-icons";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsContainer
} from "./cart-dropdown.styles";
import { DropButton } from "grommet";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const itemCount = useSelector(selectCartItemsCount);
  return (
    <Stack anchor="top-right">
      <DropButton
        icon={<Cart />}
        dropAlign={{ top: "bottom", center: "center" }}
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
              Checkout
            </CustomButton>
          </CartDropdownContainer>
        }
      />
      <Box background="brand" pad={{ horizontal: "xsmall" }} round>
        <Text>{itemCount}</Text>
      </Box>
    </Stack>
  );
};

export default CartDropdown;
