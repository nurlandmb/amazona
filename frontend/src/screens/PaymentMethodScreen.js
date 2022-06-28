import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';

function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;
  const [paymentMethodName, setPaymentMethodName] = useState(paymentMethod || 'PayPal');
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName })
    localStorage.setItem('paymentMethod', paymentMethodName)
    navigate('/placeorder')
  };
  useEffect(() => {
    if(!shippingAddress.address){
      navigate('/shipping')
    }
    
  }, [shippingAddress, navigate])
  
  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <div className="container small-container">
        <Helmet>
          <title>Payment method</title>
        </Helmet>
        <h1 className="my-3">Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              // name="payment"
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              onChange={(e) => setPaymentMethodName(e.target.value)}
              checked={paymentMethodName === 'PayPal'}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              // name="payment"
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              onChange={(e) => setPaymentMethodName(e.target.value)}
              checked={paymentMethod === 'Stripe'}
            />
          </div>
          <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default PaymentMethodScreen;
