import React from 'react';
import Card from './Card';
import './Products.css';
import ProductDate from './ProductDate';

const ProductItem=(props)=>{
    return(
        <Card className='product-item'>
            <ProductDate date={props.date}/>
            <div className='product-item__description'>
                <h2>{props.title}</h2>
            </div>
        </Card>
    )
    }
export default ProductItem;