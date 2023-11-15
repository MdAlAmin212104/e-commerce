import React, { useContext } from 'react';
import './ShopCategory.css'
import { ShopContext } from '../../Context/ShopContext';
import dropdown_icon from './../../Components/Assets/dropdown_icon.png'
import Item from '../../Components/Item/Item';





const ShopCategory = (props) => {
      const {banner} = props
      const {all_products } =useContext(ShopContext)
      return (
            <div className='shop-category'>
                  <div className="shopCategory-banner">
                        <img src={banner} alt="" />
                  </div>
                  <div className="shopCategory-indexSort">
                        <p><span>Showing 1-12</span> out of 36 products</p>
                        <div className="shopCategory-sort">
                              Sort by <img src={dropdown_icon} alt="" />
                        </div>
                  </div>
                  <div className="shopCategory-products">
                        
                        {all_products.map((item) => {
                              if (props.category===item.category){
                                  return <Item key={item.id} products={item}/>
                              }
                              else{
                                    return null;
                              }
                        })
                  }
                  </div>
                  <div className="shopCategory-loadMore">
                        Explore More
                  </div>
            </div>
      );
};

export default ShopCategory;