import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <div className="product-info">
                <img src={img} alt="" />
                <h4 className='product-heading'>{name}</h4>
                <h5 className='product-price'>Price: ${price}</h5>
                <p className='seller'>Manufacturer: {seller}</p>
                <p className='ratings'>Ratings: {ratings}</p>
            </div>
            <button className='cart-button'>Add To Cart</button>
        </div>
    );
};

export default Product;