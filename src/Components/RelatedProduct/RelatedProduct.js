import React from 'react';
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item';

const RelatedProduct = () => {
      return (
            <div className='relatedProducts'>
                  <h1>Related Products</h1>
                  <hr />
                  <div className="relatedProducts-item">
                        {data_product.map(item =>{
                              return <Item key={item.id} products={item}/>
                        })}
                  </div>
                  
            </div>
      );
};

export default RelatedProduct;