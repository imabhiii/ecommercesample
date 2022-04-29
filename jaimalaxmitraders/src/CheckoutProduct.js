import React from 'react'
import "./css/CheckoutProduct.css"
import { useStateValue } from './StateProvider'
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = () => {
    //remove the item from cart
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">

        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <strong>Rs</strong>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating).fill().map((_, i) => (
            <p style={{ color: "#ffcd3c" }}>&#9733;</p>
          ))}
        </div>
        {!hideButton && (

          <button onClick={removeFromCart}>Remove</button>
        )}
      </div>
    </div>
  )
}

export default CheckoutProduct