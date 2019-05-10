import React from 'react'
import { connect } from  'react-redux'


const sort = (items) => {
  return items.sort((a, b) => a.id < b.id)
}

function Cart(props) {
  return <div className='container'>
         
      {
        sort(props.cart).map(item => <div className='row cart-order-wrapper '>
          <div className='col-lg-3'>
            <img src={item.img} ></img>
          </div>

          <div className='col-lg-9'>
            <div className='orderproductlist'>
              <p className='cartitem'>{ item.name }</p>
              <p className='cartpartNo'>Part No: { item.number }</p>
              <p className='cartprice'>Regular Price: ${ item.quantity * item.pricing }</p>
            </div>
          
          <div className='orderqty'> { item.quantity }</div>
            <div className='orderqty-btns'> 
              <button
                onClick={(e) => props.addToCart(item)}
              >+</button>
              <button
                onClick={(e) => props.removeFromCart(item)}
              >-</button>
            </div>
            <div>
              <button
                onClick={(e) => props.removeAllFromCart(item)}
              >Remove from cart</button>
            </div>
          </div>

        </div>
        )
          
            
      }
     
    </div>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)