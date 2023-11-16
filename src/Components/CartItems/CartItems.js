import React, { useContext } from 'react';
import './cartItems.css'
import { ShopContext } from './../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItems = () => {
      const {getTotalCartAmount, all_products, cartItems, removeFromCart} = useContext(ShopContext)
      return (
            <div className='cartItems'>
                  <div className="cartItems-format-main">
                        <p>Products</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                  </div>
                  <hr />
                  {all_products.map((e) => {
                        if(cartItems[e.id]>0)
                        {
                              return <div>
                                    <div className="cartItems-format cartItems-format-main">
                                          <img src={e.image} alt="" className='cartIcon-product-icon'/>
                                          <p>{e.name}</p>
                                          <p>${e.new_price}</p>
                                          <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                                          <p>{e.new_price*cartItems[e.id]}</p>
                                          <img src={remove_icon} className='cartItems-remove-icon' onClick={() => {removeFromCart(e.id)}} alt="" />
            
                                    </div>
                                    <hr />
                              </div>
                        }
                        return null;
                  })}
                  <div className="cartItems-down">
                        <div className="cartItems-total">
                              <h1>cart Totals</h1>
                              <div>
                                    <div className="cartItems-total-items">
                                          <p>Subtotal</p>
                                          <p>${getTotalCartAmount()}</p>
                                    </div>
                                    <hr />
                                    <div className="cartItems-total-items">
                                          <p>Shipping Fee</p>
                                          <p>Free</p>
                                    </div>
                                    <hr />
                                    <div className="cartItems-total-items">
                                          <h3>Total</h3>
                                          <h3>${getTotalCartAmount()}</h3>
                                    </div>

                              </div>
                              <button>PROCEED TO CHECKOUT</button>

                        </div>
                        <div className="cartItems-promoCode">
                              <p>If you have a promo code, Enter it here</p>
                              <div className="cartItems-promoBox">
                                    <input type="text" placeholder='promo code'/>
                                    <button>Submit</button>
                              </div>
                        </div>
                  </div>
                  
            </div>
      );
};

export default CartItems;