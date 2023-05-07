/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = product => {
        let newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div>
            <div className='shop-container'>
                <div className="products">
                    <h3>Your Produts Are Here!!</h3>
                    <div className='products-container'>
                        {
                            products.map(p => <Product
                                key={p.id}
                                product={p}
                                handleCart={handleAddToCart}
                            ></Product>)
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <h4 className='order-header'>Order Summary</h4>
                    <h5 style={{ textAlign: 'center' }}>Selected Items: {cart.length}</h5>
                </div>
            </div>
        </div>
    );
};

export default Shop;