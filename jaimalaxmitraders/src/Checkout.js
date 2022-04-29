import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./css/Checkout.css"
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal.js";

function Checkout() {
    // eslint-disable-next-line no-unused-vars
    const [{basket,user}, dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="./images/33-339799_hand-tools-transparent-hardware-tools-png.png" alt="" />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {basket.map(item =>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout