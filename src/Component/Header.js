import React from 'react'
import './header.css';

export default function Header() {
  return (
    <div className='navbar'> 
    <img className='img' src={require('../image/myntra.png')}/>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
        </ul>
        <div className='right'>
            <input className="input"type="text" placeholder='Search for Products,brands and more'/>
            <div className='profile'>Profile</div>
            <div className='wishlist'>Wishlist</div>
            <div className='bag'>Bag</div>
          

        </div>
          
      
    </div>
  )
}
