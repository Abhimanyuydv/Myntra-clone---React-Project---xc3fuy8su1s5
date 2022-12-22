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
        <li>Terms Of Use</li>
        <li>Track Order</li>
        <li>Shipping</li>
        <li>Cancellation</li>
      </div>
      <div>
        <div className='p-tag'>
        <p>EXPERIENCE MYNTRA APP ON MOBILE</p>
          <div className='link-download section' >
            <img className="desktop-iOSDownLink"src={require('../image/store.png')} alt="" />
            <img className="desktop-iOSDownLink"src={require('../image/play.png')} alt="" />

          </div>
        </div>
      </div>

    </div>
  )
}
