import React from 'react';
import data_products from '../Assets/data';



//css style
import './Popular.css'
import Item from '../Item/Item';

const Popular = () => {
      return (
            <div className='popular'>
                  <h1>POPULAR IN WOMAN</h1>
                  <hr/>
                  <div className="popular-item">
                        {data_products.map((item) => <Item key={item.id} products={item}></Item>)}
                  </div>
                  
                  
            </div>
      );
};

export default Popular;