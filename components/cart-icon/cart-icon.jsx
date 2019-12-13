import React from "react";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import ShoppingIcon from "../../public/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  return (
    <CartIconContainer>
      <ShoppingIcon style={{ width: "3rem", height: "4rem" }} />
      <ItemCount>{itemCount || 0}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
