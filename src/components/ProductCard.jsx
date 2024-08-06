import React from 'react'
import {addItem} from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const ProductCard = (props) => {
    const dispatch = useDispatch();
    const handleAdd = () =>{
    console.log("Items Added",props.item);
    // props.setCart((prev)=>[...prev, props.item])
    dispatch(addItem(props.item));
    }
  return (
    <div className="product-card">
     
    <img src={props.item.image}/>
    <h3>{props.item.title}</h3>
      
    <p>{props.item.description}</p>
    <div className='AddtoCart_pricediv'>
    <span className="price">Price:${props.item.price}</span>
    <button onClick={handleAdd}>Add to Cart</button>
    </div>
</div>
  )
}

export default ProductCard