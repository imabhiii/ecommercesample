import React from 'react'
import "./css/Home.css"
import Product from './Product'
const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="./images/33-339799_hand-tools-transparent-hardware-tools-png.png" alt="" />
                <div className="home_row">
                    <Product id="123777745" title='the lean startup' price={2000} image="./images/2020-04-20-07-29-21_RkLQWXeoPtproduct.jpg" rating={5} />
                    <Product id="12346665" title='the lean startup' price={2000} image="./images/2020-04-20-07-29-21_RkLQWXeoPtproduct.jpg" rating={5} />
                </div>
                <div className="home_row">
                <Product id="12345111" title='the lean startup' price={2000} image="./images/2020-04-20-07-29-21_RkLQWXeoPtproduct.jpg" rating={5} />
                <Product id="12345222" title='the lean startup' price={2000} image="./images/2020-04-20-07-29-21_RkLQWXeoPtproduct.jpg" rating={5} />
                <Product id="1234445" title='the lean startup' price={2000} image="./images/2020-04-20-07-29-21_RkLQWXeoPtproduct.jpg" rating={5} />
                </div>
                <div className="home_row">
                <Product title='the lean startup' price={2000} image="./images/2020-04-20-07-29-21_RkLQWXeoPtproduct.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home