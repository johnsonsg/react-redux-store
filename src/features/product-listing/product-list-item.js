import React from 'react'
import AddBtn from './add-btn'

require('./log.js');

export default function ProductItem(props) {
  return <div className='product-list-item'>
    
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3 text-center'>
          <img
            height={100}
            title={ props.product.name }
            src={props.product.img}
          />
        </div>  
        
        <div className='col-lg-9 itemWrap'>
          <h3>{ props.product.name }</h3>
          <div className='partNo'>{ props.product.number }</div>
          <div className='price'>${ props.product.pricing }</div>
          <div>
            
            <AddBtn
              cartItem={props.cartItem}
              product={props.product}
              addToCart={props.addToCart}
            />

           
          </div> 

        </div>
      </div>   

    </div>
  </div>
  
}