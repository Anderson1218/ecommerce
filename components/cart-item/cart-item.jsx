import {
  CartItemContainer,
  ItemDetails,
  Name,
  Image
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <Image src={imageUrl} alt="item" />
    <ItemDetails>
      <Name>{name}</Name>
      <span>
        {quantity} * ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
