import React from 'react'
import "./Header.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
  const cartItems = useSelector((state)=>state.cart.items);
  
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