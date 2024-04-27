import React, { useState, useEffect } from 'react';
import './cart.css';

const Cart = ({ cart , removeFromCart}) => {
    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
        setCartItems(cart);
      }, [cart]);
  

      //quntity check

      const handleQuantityChange = (index, quantity) => {
        const newCart = [...cartItems];
        newCart[index].quantity = quantity;
        setCartItems(newCart);
      };

      //subtotal
  
      const calculateItemSubtotal = (item) => {
          const price = parseFloat(item.ProductPrice.replace('$', '').trim());
          return price * item.quantity;
      };

      //total price
  
      const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
          totalPrice += calculateItemSubtotal(item);
        });
        return totalPrice;
      };
  
      const handleCheckout = () => {
        alert('Checkout functionality will be implemented later.');
      };
  
  return (
    <div className='container pt-5 pb-5'>
      <div className='row'>
        <div className="cart">
          <h2>Cart</h2>
          {cartItems.length === 0 ? <p>Your cart is empty</p> : null}
          <div className='row shop_table pt-5'>
            <div className='row table-title'>
              <div className='col-lg-3 product-name'>Product</div>
              <div className='col-lg-3'></div>
              <div className='col-lg-3 product-quantity'>Quantity</div>
              <div className='col-lg-3 product-subtotal'>Subtotal</div>
            </div>
            {cartItems.map((item, index) => (
              <div className='col-12' key={index}>
                <div className='row cart-item'>
                  <div className='col-lg-1 col-md-1 col-12 remove-cart-box'>
                    <div className='remove-cart' onClick={() => removeFromCart(index)}> <i className="fa fa-close"></i></div>
                  </div>
                  <div className='col-lg-5 col-md-4 col-12 product-item'>
                    <img src={item.ProductImg} alt={item.ProductName} className='cart-item-img img-fluid' />
                    <div className='product-text'>
                      <p className="cart-item-name m-0">{item.ProductName}</p>
                      <p className="cart-price m-0">{item.ProductPrice}</p>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-4 col-12 quantity'>
                    <div className="quantity-item">
                      <input type="number"  className="input-text qty text"  step="1"  min="1" value={item.quantity} onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}/>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-4 col-12 cart-price-box'>
                    <p className="cart-item-price">${calculateItemSubtotal(item)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='row sub-total-box'>
            <div className='col-lg-9 col-md-9 col-12'></div>
            <div className='col-lg-3 col-md-3 col-12 sub-total'>
              <p>Total Price: ${calculateTotalPrice()}</p>
              {cartItems.length > 0 && (
                <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
