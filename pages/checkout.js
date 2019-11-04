import Head from "next/head";
import StripeButton from "../components/stripe-button/stripe-button";
import { useSelector } from "react-redux";
import { selectCartTotal, selectCartItems } from "../redux/cart/cart.selectors";
import CheckoutItem from "../components/checkout-item/checkout-item";

const CheckoutPage = () => {
  const price = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  return (
    <div>
      <Head>
        <title>checkout page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!!cartItems.length ? (
        <div className="checkout-page">
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Product Name</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          <div className="items-container">
            {cartItems.map(cartItem => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <span>TOTAL: ${price}</span>
          <StripeButton price={price} />
        </div>
      ) : (
        <div className="empty-cartItems">
          <h2>快去加東西進購物車</h2>
        </div>
      )}

      <style jsx>{`
        .checkout-page {
          width: 70%;
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 50px auto 0;
        }
        .checkout-header {
          width: 100%;
          padding: 10px 0;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid darkgrey;
        }
        @media screen and (max-width: 991px) {
          .checkout-header {
            display: none;
          }
        }
        .items-container {
          width: 100%;
          height: 600px;
          margin-bottom: 15px;
          overflow: scroll;
        }
        .header-block {
          text-transform: capitalize;
          width: 23%;
        }
        span {
          font-size: 1.5rem;
        }
        .header-block:last-child {
          width: 8%;
        }
        .total {
          margin-top: 30px;
          margin-left: auto;
          font-size: 36px;
        }
        .empty-cartItems {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default CheckoutPage;
