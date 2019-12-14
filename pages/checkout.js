import styled from "styled-components";
import Head from "next/head";
import StripeButton from "../components/stripe-button/stripe-button";
import { useSelector } from "react-redux";
import { selectCartTotal, selectCartItems } from "../redux/cart/cart.selectors";
import CheckoutItem from "../components/checkout-item/checkout-item";

const StyledCheckoutPage = styled.div`
  width: 70%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const Header = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const HeaderBlock = styled.div`
  width: 20%;
  &:last-child {
    width: 8%;
  }
`;

const ItemsContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
  max-height: 600px;
  overflow: scroll;
`;

const Text = styled.span`
  font-size: 1.5rem;
`;

const EmptyCartItems = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckoutPage = () => {
  const price = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  return (
    <>
      <Head>
        <title>Checkout page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!!cartItems.length ? (
        <StyledCheckoutPage>
          <Header>
            <HeaderBlock>
              <Text>產品圖示</Text>
            </HeaderBlock>
            <HeaderBlock>
              <Text>產品名稱</Text>
            </HeaderBlock>
            <HeaderBlock>
              <Text>數量</Text>
            </HeaderBlock>
            <HeaderBlock>
              <Text>單價</Text>
            </HeaderBlock>
            <HeaderBlock>
              <Text>刪除</Text>
            </HeaderBlock>
          </Header>
          <ItemsContainer>
            {cartItems.map(cartItem => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </ItemsContainer>
          <Text>TOTAL: ${price}</Text>
          <StripeButton price={price} />
        </StyledCheckoutPage>
      ) : (
        <EmptyCartItems>
          <h2>快去加東西進購物車</h2>
        </EmptyCartItems>
      )}
    </>
  );
};

export default CheckoutPage;
