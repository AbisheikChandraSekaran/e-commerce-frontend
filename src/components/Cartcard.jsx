import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Cartcard = (props) => {
  const { item } = props;
  const token =  useSelector((state)=>state.user.token)
    console.log("==>item_id",item.product_id)

  const payload =[{
    product_id: item.product_id,
    quantity: item.quantity + 1,
  }]
  
    const incrementItem = async() => {
      const res = await axios.post("http://localhost:3000/addToCart",{products:payload},{
        headers:{
          Authorization : `Bearer ${token}`},
      })
      console.log("==> result",res);
      
    };
  
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
          <button onClick={incrementItem}>+</button>
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
