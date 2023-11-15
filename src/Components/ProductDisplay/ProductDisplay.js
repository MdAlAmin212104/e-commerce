import React from 'react';
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'




const ProductDisplay = (props) => {
      const {image, name, old_price, new_price} = props.product;
      return (
            <div className='productDisplay'>
                  <div className="productDisplay-left">
                        <div className="productDisplay-img-list">
                              <img src={image} alt="" />
                              <img src={image} alt="" />
                              <img src={image} alt="" />
                              <img src={image} alt="" />
                        </div>
                        <div className="productDisplay-img">
                              <img class='productDisplay-main-img' src={image} alt="" />
                        </div>
                  </div>
                  <div className="productDisplay-right">
                        <h1>{name}</h1>
                        <div className="productDisplay-right-start">
                              <img src={star_icon} alt="" />
                              <img src={star_icon} alt="" />
                              <img src={star_icon} alt="" />
                              <img src={star_icon} alt="" />
                              <img src={star_dull_icon} alt="" />
                              <p>(122)</p>
                        </div>
                        <div className="productDisplay-right-prices">
                              <div className="productDisplay-right-old-prices">${old_price}</div>
                              <div className="productDisplay-right-new-price">${new_price}</div>
                        </div>
                        <div className="productDisplay-right-des">
                              A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment
                        </div>
                        <div className="productDisplay-right-sizes">
                              <h1>select Size</h1>
                              <div className="productDisplay-right-size">
                                    <div>S</div>
                                    <div>M</div>
                                    <div>L</div>
                                    <div>XL</div>
                                    <div>XXL</div>
                              </div>
                        </div>
                        <button>ADD TO CART</button>
                        <p className="productDisplay-right-category"><span>Category : <span>Women, T-Shirt, Crop Top</span></span></p>
                        <p className="productDisplay-right-category"><span>Tags : <span>Modern, Latest</span></span></p>
                  </div>
            </div>
      );
};

export default ProductDisplay;