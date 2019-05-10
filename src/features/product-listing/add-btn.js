import React from 'react'

export default function AddButton(props) {
  return <button

  /*  Add ths function if you want to add quanity number to button
  onClick={() => props.addToCart(props.product)}
  >Add to cart ({
    (props.cartItem && props.cartItem.quantity) || 0
  })</button>
  */
 onClick={() => props.addToCart(props.product)}>Add to cart</button> }