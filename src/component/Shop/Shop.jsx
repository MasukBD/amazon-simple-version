import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='shop-container'>
                <div className="products">
                    <h3>Your Produts Are Here!!</h3>
                    <div>
                        {
                            products.map(product => console.log(product))
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <h4 className='order-header'>Order Summary</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;