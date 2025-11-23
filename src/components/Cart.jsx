import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RestaurantMenuItemList from './RestaurantMenuItemList';
import { clearCart } from '../store/cartSlice';

const Cart = () => {
    const cartItems = useSelector(store=> store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    
  return (
    <div>
    <button className='text-white bg-black px-2' onClick={handleClearCart}>clear Cart</button>

    {cartItems.length === 0 && <h1>your cart is empity please add items</h1>}
        <RestaurantMenuItemList  items={cartItems}/>
    
    </div>
  )
}

export default Cart