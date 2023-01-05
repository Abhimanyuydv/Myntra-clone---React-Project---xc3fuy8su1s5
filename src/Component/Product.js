import React from 'react'
import './product.css';

export default function Product({ tempData,cart,setCart}) {

  function handleClick(e) {
    let clickedElem = e.target.id
    let temp1 = [...tempData];
    let product = temp1[clickedElem];
    setCart([...cart, product])
    

  }
  // console.log(cart)
  return (
    <div className='product-wrapper'>
      {tempData.map((item, index) => {
        return (
          <div className="product-container" key={index}>
            <div className='p-image'>
              <img className="buy-image" src={item.image} alt="product" />
            </div>
            <p>{item.price}</p>
            <h6>{item.title}</h6>
            <button id={index} onClick={handleClick} className='btn'>Add To Bag</button>

          </div>
        )
      }
      )}
    </div>

  )
}
