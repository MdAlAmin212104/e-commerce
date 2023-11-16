import React from 'react';



// css style 
import './Item.css';
import { Link } from 'react-router-dom';
const Item = (props) => {
      const {name, old_price, new_price, image, id} = props.products;
      return (
            <div className='item'>
                  <Link to={`/product/${id}`}><img onClick={window.scrollTo(0,0)} src={image} alt="" /></Link>
                  <p>{name}</p>
                  
                  <div className="item-price">
                        <div className="item-new-price">${new_price} </div>
                        <div className="item-old-price">${old_price} </div>
                  </div>
            </div>
      );
};

export default Item;