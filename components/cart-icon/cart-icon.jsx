import React from "react";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import ShoppingIcon from "../../public/shopping-bag.svg";
import { StyledCartIcon, StyledItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  return (
    <StyledCartIcon>
      <ShoppingIcon style={{ width: "3rem", height: "4rem" }} />
      <StyledItemCount>{itemCount || 0}</StyledItemCount>
    </StyledCartIcon>
  );
};

export default CartIcon;
