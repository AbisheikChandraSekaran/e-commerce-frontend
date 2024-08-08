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
  
  // useEffect(()=>{
  //   getCartItems();
  // },[]);
  useEffect(() => {
    getCartItems();
},[]);

  const dispatch = useDispatch();


  const getCartItems = async () => {
    const res = await axios.get("http://localhost:3000/getCartItems", {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmI0ZTkzNjJmNGVhNGQ3OGU3ZWNmOWEiLCJpYXQiOjE3MjMxMzYwMjYsImV4cCI6MTcyMzIyMjQyNn0.iwQVcPkWlPmyHi_LPs5wGWYu5HNkQ96zqZ9YbANh2Bo"
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
        <span>About</span>
        <Link to='/cart'>Cart: {cartItems.length}</Link>
        
      </nav>
    </header>
  
  )
}

export default Header