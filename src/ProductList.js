import React, { useState } from 'react';
import ProductAPI from './API/Product-Api.js';
import './productlist.css';

const ProductList = ({ addToCart }) => {

    const [product, setProduct] = useState(ProductAPI);

    console.log(setProduct);

  return (
    <>
      <div className='container pt-5'>
        <div className='row'>
            {
                product.map((ProductData) => {

                    const{ ProductId, ProductImg, ProductName, ProductPrice, AddToCart} = ProductData ;

                    return (
                        <div className='col-lg-3 col-md-6 col-12' key={ProductId}>
                            <div className='product-box'>
                                <div className='product-img'>
                                    <img src={ProductImg}  className='img-fluid'/>
                                </div>
                                <div className='product-info'>
                                    <h3 className='product-title'>{ProductName}</h3>
                                    <div className='product-price'>{ProductPrice}</div>
                                    <button className='add-to-cart' onClick={() => addToCart(ProductData)}>{AddToCart}</button>
                                </div>
                            </div>
                        </div>
                    );

                })
            }
        </div>
      </div>
    </>
  )
}

export default ProductList;
