import 'react-credit-cards/es/styles-compiled.css';

import React from 'react';

import axios from 'axios';
import Cards from 'react-credit-cards';

export default class Carddetails extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  onSubmit = (e) => {
    e.preventDefault();
   
    const { cvc,expiry,name,number } = this.state;

    axios.post('http://localhost:8083/api/postcards', { cvc,expiry,name,number })
      .then((result) => {
      console.log(result);
      });
  }
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        /><br></br><br></br>
        <form onSubmit={this.onSubmit}>
        <label>CREDITCARD NUMBER</label>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /> <br></br> <br></br>
          <label>CARDHOLDER NAME</label>
          	<input
            type="text"
            name="name"
            placeholder="Cardholder NAme"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <label>EXPIRATION  </label>
        	<input
            type="tel"
            name="expiry"
            placeholder="Expiry month/year"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /> <br></br> <br></br>
           <label>CVV </label>
        	<input
            type="tel"
            name="cvc"
            placeholder="cvv"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /> <br></br> <br></br>
          <button type="submit">Generate Card</button>
        </form>
      </div>
    );
  }
}