import React from 'react';
import './Products.css';

const ProductsDisplayComponent = ({products})=>{
    return(
        <div>
        <h4>Products List</h4>
        <ul className="products-list"> 
          {products.map(el=>(
           <li key={el.id}>{el.name}</li>
     )
    )}
        </ul>
        </div>
    )
}
export default ProductsDisplayComponent;