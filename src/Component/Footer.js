import React from 'react'
import './footer.css';


export default function footer() {
  return (
    <div className='footer'>
      <div>
      <p>ONLINE SHOPPING</p>
      <li>Men</li>
      <li>Women</li>
      <li>Kids</li>
      <li>Home & Living</li>
      <li>Beauty</li>
      <li>Gift Cards</li>
      </div>
      <div className='middle-section'>
      <p>CUSTOMER POLICIES</p>
      <li>FAQ</li>
      <li>T&C</li>
      <li>Termx Of Use</li>
      <li>Track Order</li>
      <li>Shipping</li>
      <li>Cancellation</li>
    </div>
    <div>
        <div className='p-tag'>

      <p>EXPERIENCE MYNTRA APP ON MOBILE</p>
        <div >
      <img src={require('../image/store.png')} />
      <img src={require('../image/play.png')} />

        </div>
        </div>
      </div>
     
    </div>
  )
}
