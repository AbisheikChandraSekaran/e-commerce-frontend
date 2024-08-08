import React from 'react'
import {addItem} from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductCard = (props) => {
  const cartItems = useSelector((state)=>state.cart.items);
  // const payload ={products:
  //   [ {productid:props.item.id,
  //     quantity : 1}]
  // }

  const payload = {
    products: [{
        product_id: props.item.id,
        quantity: 1
    }]
}
   
  
    const dispatch = useDispatch();
    
    const isInCart = cartItems.find((el)=>el.id===props.item.id);   //
    const handleAdd = async () =>{
      const res = await axios.post("http://localhost:3000/addToCart",payload,{
        headers:{
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmI0ZTkzNjJmNGVhNGQ3OGU3ZWNmOWEiLCJpYXQiOjE3MjMxMzc1MDEsImV4cCI6MTcyMzIyMzkwMX0.yLyJM8ic-NCA6im9ylmu7ySkEp_AbhPmzcDSCN4ocaI"
        }
        
      });
    
    dispatch(addItem(props.item));
    }

    
      return (
    <div className="product-card">
     
    <img src={props.item.image}/>
    <h3>{props.item.title}</h3>
      
    <p>{props.item.description}</p>
    <div className='AddtoCart_pricediv'>
    <span className="price">Price:${props.item.price}</span>
    {isInCart?(
      <Link to="/cart">
        <button>Go to Cart</button>
      </Link>
    ):(<button onClick={handleAdd}>Add to Cart</button>)}
    </div>
</div>
  )
}

export default ProductCard