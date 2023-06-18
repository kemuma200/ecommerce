import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "../css/payment.css"


export default function Payment() {
  const [paymentOption, setPaymentOption] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentOption(event.target.value);
  };

  return (
    <div className="payment-option-container">
      <ul className="payment-contents">
      <p>Please select your favorite Web language:</p>
        <li>
          <input type="radio" id="mobile" name="payment_options" value="Mobile"/>
          <label for="mobile">Mobile</label><br/>
        </li>
        <li>
          <input type="radio" id="card" name="payment_options" value="Card"/>
          <label for="card">Card</label><br/>
        </li>
        <li>
          <input type="radio" id="bank" name="payment_options" value="Bank"/>
          <label for="bank">Bank</label><br/>
        </li>
        <li>
          <input type="radio" id="paypal" name="payment_options" value="Paypal"/>
          <label for="paypal">Paypal</label>
        </li>
      </ul>
    
  
    </div>
    
   
      
    
  );
}