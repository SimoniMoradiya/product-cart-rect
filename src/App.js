import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList.js';
import Cart from './cart.js';

const App = () => {

  const [cart, setCart] = useState([]);

 //product add to cart
 const addToCart = (productItem) => {
  const existingIndex = cart.findIndex(item => item.ProductId === productItem.ProductId);
  if (existingIndex !== -1) {
      // quantity check
      const newCart = [...cart];
      newCart[existingIndex].quantity++;
      setCart(newCart);
  } else {
     
      const productWithQuantity = { ...productItem, quantity: 1 };
      setCart([...cart, productWithQuantity]);
  }
};

  //  remove product  cart
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }; 


  return (
    <>
      <div className='container'>
        <div className="row pt-5">
          <div className='col-11 text-center '>
              <h1>Shopping Cart</h1>
          </div>
          <div className='col-1 cart-icon'>
              <span className='cart-icon-number'>{cart.length}</span>
              <i class="fa fa-shopping-cart"></i>
          </div>
          <ProductList  addToCart={addToCart}/>
          <Cart cart={cart} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </>
  )
}

export default App

