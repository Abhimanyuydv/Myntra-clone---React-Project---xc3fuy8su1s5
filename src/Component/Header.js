import React, { useState } from 'react'
import './header.css';
import { Link } from "react-router-dom";
// import {FaHome } from "react-icons/fa";
import {BsFillBagFill } from "react-icons/bs";

export default function Header({data,setTempData}) {
  const [searchValue, setSearchValue] = useState([""])
  


  function handleChange(e) {
    setSearchValue(e.target.value)
  }
  function handleClick() {
    let res = data.filter(function (item) {
      return item.title.toLowerCase().includes(searchValue);
    })
    setTempData(res)
    console.log("header")
  }
  return (

    <div className='navbar'>
      
     <img className='logo' src={require('../image/myntra.png')}alt="" />
     
      <ul>
       <li><Link  to="/">Home </Link></li>
        <li><Link to="/product">Product </Link></li>
        </ul>
        
        <div>
        <input className="input" type="text" placeholder='Search for Products,brands and more'
          value={searchValue}
          onChange={handleChange}
          onKeyPress={handleClick}/>
          </div>
         <div className='right-section'>
        {/* <li>Profile</li>
        <li>Wishlist</li> */}
        <li><Link to ="/bag"><BsFillBagFill size="30px"/></Link></li>
   </div>
      
        </div>
       
        )
}
