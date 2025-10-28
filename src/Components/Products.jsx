import React from 'react';
import Phone from '../assets/iphone.png'
const Products = (props) => {
    let product="Iphone";
    return (
        <div className='card'>
            <img src={props.image} alt="iphone"  />
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <p>{props.disc}</p>
           
        </div>
    );
};

export default Products;