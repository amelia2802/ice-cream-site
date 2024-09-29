import React from "react";
import thankYouImage from "../img/thankyou.png";

export default function PaymentForm({totalPrice}){

        const [formData, setFormData] = React.useState(
          {
              fullName: "", 
              address: "", 
              phoneNumber: "", 
              cardNumber: "", 
              expDate: "",
              cvc: "",
          }
      )
      function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        const confirmOrder = document.getElementById("cart")
        const thankYouMsg = 
          `
          <div className="thanks-msg">
            <img src=${thankYouImage} />
            <p>Thanks, ${formData.fullName}! We're preparing your order now, and it will be on its way soon!
</p>
          </div>  
          `
        alert(`Proceeding to payment for $${totalPrice.toFixed(2)}`);
        confirmOrder.innerHTML = thankYouMsg
        document.getElementById("payment-form").style.display="none"
    }
    return(
        <div id="payment-form">
        <h1>Checkout</h1>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label htmlFor="fullName">Cardholder's Name</label>
          <input 
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <label htmlFor="address">Cardholder's Address</label>
          <input 
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <label htmlFor="phoneNumber">Contact Number</label>
          <input 
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            min={1000000000}
            max={9999999999}
            required
          />
          <label htmlFor="cardNumber">Card Number</label>
          <input 
            type="number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
          <div>
            <label htmlFor="expdate">Expiration Date</label>
            <input 
              type="month"
              name="expDate"
              value={formData.expDate}
              onChange={handleChange}
              required
            />
            <label htmlFor="cvc">CVC</label>
            <input 
              type="number"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              min="111"
              max="999"
              required
            />
          </div>
          <button className="confirm-order">Proceed to Pay ${totalPrice}</button>
        </form>
      </div>
    )
}