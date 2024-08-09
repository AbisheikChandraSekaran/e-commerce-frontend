import React from 'react'
import "./Header.css"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { setCart } from '../redux/cartSlice';


const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log('===> cart', cartItems)
  const token = useSelector((state)=>state.user.token)
  
  useEffect(()=>{
    if(token){
      getCartItems();
  }},[token])


  const dispatch = useDispatch();


  const getCartItems = async () => {
    const res = await axios.get("http://localhost:3000/getCartItems", {
        headers: {
            Authorization: `Beaker ${token}`
        }
    });
    console.log(res.data);
    dispatch(setCart(res.data.products))
  
}

  console.log(cartItems.length)
  return (
    <header className="header">
      <span>Logo</span>
      <nav className="nav-links">
        <Link to='/'>Products</Link>
        {token?
        // <Link to="/logout">Logout</Link>}
        <span>Logout</span>:
        <Link to="/login">Login</Link>}
        <span>About</span>
        <Link to='/cart'>Cart: {cartItems.length}</Link>
        
      </nav>
    </header>
  
  )
}

export default Header