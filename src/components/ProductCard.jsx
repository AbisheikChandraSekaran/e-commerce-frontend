import React from 'react'
import {addItem} from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const dispatch = useDispatch();
    const cartItem = useSelector((state)=>state.cart.items);
    const isInCart = cartItem.find((el)=>el.id===props.item.id);
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