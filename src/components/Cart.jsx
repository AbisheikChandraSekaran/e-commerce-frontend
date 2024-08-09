import React from 'react'
import Cartcard from './Cartcard'
import { useSelector } from 'react-redux';
import CartCheckout from './CartCheckout';
const Cart = () => {
  const cartItems = useSelector((state)=>state.cart.items);
  console.log("==>cartItem",cartItems)
  return (
    <>
    <div className='MainCartOuter'>
    <div className='MainCart'>
    {cartItems.map((product) => (
      <Cartcard key={product.id} item={product}  />
    ))}</div>

    <CartCheckout/>
    </div>
 
 </>
  )
}
export default Cart;