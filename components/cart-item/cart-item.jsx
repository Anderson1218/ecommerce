import {
  StyledCartItem,
  StyledItemDetails,
  StyledName,
  StyledImage
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <StyledCartItem>
    <StyledImage src={imageUrl} alt="item" />
    <StyledItemDetails>
      <StyledName>{name}</StyledName>
      <span>
        {quantity} * ${price}
      </span>
    </StyledItemDetails>
  </StyledCartItem>
);

export default CartItem;
