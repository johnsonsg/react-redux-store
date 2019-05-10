import React from 'react'
import ProductItem from './product-list-item'
import { connect } from 'react-redux'

function ProductListing(props) {
  return <div className='product-listing'>
    {
      props.products.map( product =>
        <ProductItem
          product={product}
          addToCart={props.addToCart}
         // removeFromCart={props.removeFromCart}
          cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
        />)
    }
  </div>
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ 
        type: 'ADD', 
        payload: item,
      })
      console.log(dispatch.products);
    },
    removeFromCart: (item) => {
      dispatch({ 
        type: 'REMOVE', 
        payload: item,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)