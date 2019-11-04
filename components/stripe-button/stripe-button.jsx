import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import { clearAllItemsFromCart } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

const StripeCheckoutButton = ({ price }) => {
  const dispatch = useDispatch();
  //stripe requires price in cents
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_XVXMKAffgMXfx8XPTHK4EfeD00hfUqDTDH";
  const onToken = token => {
    // going to make API call to Backend
    dispatch(clearAllItemsFromCart());
    alert("Payment Successful");
  };
  return (
    <>
      <StripeCheckout
        // label="付款"
        name="Shop Store"
        billingAddress
        shippingAddress
        image=""
        description={`Total $${price}`}
        amount={priceForStripe}
        panelLabel="Pay"
        token={onToken}
        stripeKey={publishableKey}
      >
        <button className="btn btn-primary stripe-button">來去付款</button>
      </StripeCheckout>
      <style jsx>{`
        .stripe-button {
          width: 300px;
        }
      `}</style>
    </>
  );
};

export default StripeCheckoutButton;
