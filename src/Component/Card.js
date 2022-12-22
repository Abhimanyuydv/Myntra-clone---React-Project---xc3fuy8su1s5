import React from 'react'

export default function Card({ tempData }) {

    
  return (
    <div>
      <div>
        {tempData.map((item, index) => {
  return (
    
    <div className="my-3">
        <div className="card">
        <img className="p"src={item.image} alt="product" />
           <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">
              {item.price}
            </p>
          </div>
        </div>
      </div>
    )
}
)}
    </div>
    </div>
  
  )
}



{/* <div className="my-3">
        <div className="card">
          <img src={imageUrl} /> <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-dark">
              Read More 
            </a>
          </div>
        </div>
      </div>
    );
  }
} */}

