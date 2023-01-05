import React from 'react'
import './product.css';


export default function Bag({cart}) {
  console.log(cart)
  return (
    <div>
    {cart.map((item, index) => {
        return (
          <div key={index}>
            <div className="card-container">
              <img className="cart-image" src={item.image} alt="product" />
            </div>
            <p>{item.price}</p>
            <h6>{item.title}</h6>
            <button className='cart-btn'>Buy</button>
          </div>
        )
      }
      )}

   
    </div>
  )
}
