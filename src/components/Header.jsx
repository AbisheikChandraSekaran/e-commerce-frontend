import React from 'react'
import "./Header.css"
import { useSelector } from 'react-redux';
const Header = () => {
  const cartItems = useSelector((state)=>state.cart.items);
  console.log(cartItems)
  return (
    <header className="header">
      <span>Logo</span>
      <nav className="nav-links">
        <span>Products</span>
        <span>About</span>
        <span>Cart: {cartItems.length}</span>
        
      </nav>
    </header>
  
  )
}

export default Header