import React from "react";
import StripeCheckout from "react-stripe-checkout";
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
    <StripeCheckout
      label="Pay Now!"
      name="An Store"
      billingAddress
      shippingAddress
      image=""
      description={`Total $${price}`}
      amount={priceForStripe}
      panelLabel="Pay"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
