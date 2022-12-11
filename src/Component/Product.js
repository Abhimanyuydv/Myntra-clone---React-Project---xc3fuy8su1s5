import React from 'react'
import './product.css';
import { useEffect, useState } from "react";

export default function Product({ tempData }) {



  return (
    <div>
      <div className='wrapper'>
        {tempData.map((item, index) => {
          return (
            <div key={index}>

              <img src={item.image} alt="product image" />
              <p>{item.price}</p>
              <h4>{item.title}</h4>;
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}
