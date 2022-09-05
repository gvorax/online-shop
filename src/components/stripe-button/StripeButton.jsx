import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Image from './CRW.ico';

const StripeCheckoutButton = ({price}) => {
  const onToken = token =>{
    console.log(token);
    alert("Success")
  }

  const priceForStripe = price*100;
  const publicKey = 'pk_test_51L8VL3HWyaiG2tzOfQWHz0p2wlSnv2OAhYkJGzWTpXMsIfE7aFHDZbsSDhGxjG1jRlmJJuBKixjlaELxDxgvdo3G0038eVznie';
  
  return (
    <StripeCheckout 
    label = "Pay now"
    name = 'CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image = {Image}
    description = {`Your total is $${priceForStripe}`}
    panelLabel='Pay now'
    stripeKey={publicKey}
    token = {onToken}/>
    
  )
}

export default StripeCheckoutButton