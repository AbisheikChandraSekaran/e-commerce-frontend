import React from "react";


const Cartcard = (props) => {
  const { item } = props;
  


 
  
  return (
    <>
    <div className="cart-card">
      <div className="cart-card-img">
        <img src={item.image} alt={item.title} width={50} />
      </div>
      <div className="cart-card-details">
        <div className="cart-card-title">{item.title}</div>
        <div className="cart-card-quantity">
          <button>-</button>&nbsp;
          {item.quantity || 1}&nbsp;
          <button>+</button>
        </div>
        <div className="cart-card-price">
          <div>Price: ${item.price}</div>
        </div>
      </div>
      </div>
      
  </>
      
    
  );
};

export default Cartcard;
