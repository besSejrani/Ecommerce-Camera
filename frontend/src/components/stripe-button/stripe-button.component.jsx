import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceStripe = price * 100;
  const publishableKey = "pk_test_wY7bgBZbTJSklGmANSZbI4bf00cG39wwlu";

  const onToken = token => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price} CHF`}
      amount={priceStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeButton;
