import React from 'react'
import "./css/Product.css"
import {useStateValue } from "./StateProvider"
function Product ({id,title,image,price,rating}){
  const [{basket}, dispatch] = useStateValue();
  console.log("this is a basket ", basket);
  const addtoCart =() =>{
    //dispatch the item into data layer
    dispatch({
      type:'ADD_TO_CART',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p style={{ color: "black"}}>{title}</p>
        <p className="product_price">
          <strong style={{ color: "black" }}>Rs</strong>
          <strong style={{ color: "black" }}>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_,i)=>(
            <p style={{color:"#ffcd3c"}}>&#9733;</p>
          ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addtoCart}>Add to Cart</button>
    </div>
  );
}

export default Product