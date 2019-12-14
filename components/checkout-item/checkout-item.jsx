import React from "react";
import {
  RemoveButton,
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Text,
  QuantityContainer,
  Arrow,
  Quantity,
  Price
} from "./checkout-item.styles";
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
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="item" />
      </ImageContainer>
      <Text>{name}</Text>
      <QuantityContainer>
        <Arrow onClick={() => dispatch(removeItem(cartItem))}>&#10094;</Arrow>
        <Quantity>{quantity}</Quantity>
        <Arrow className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </Arrow>
      </QuantityContainer>
      <Price>{price}</Price>
      <RemoveButton onClick={() => dispatch(clearItemFromCart(cartItem))}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
