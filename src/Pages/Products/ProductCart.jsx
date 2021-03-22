import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteFromCart, StartAdd } from '../../Store/Actions/productActions';

export const ProductCart = () => {

    const Cart = useSelector(state => state.ProductCart);
    const TotalCart = useSelector(state => state.TotalCart)
    const dispatch = useDispatch();

    const handlePay =()=>{
        console.log(Cart);
        dispatch(StartAdd(Cart));
    }

    return (
    <div className='rg-container'>
        {
            ( Cart.length === 0 )
            ? 
            <div class="d-flex justify-content-center alert alert-primary" role="alert">
                <i style={{ fontSize:'50px' }} class="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
                
            :
          <>
            <table className='rg-table' summary='Hed'>
                <thead>
                    <tr>
                        <th className='text '>Product Name</th>
                        <th className='text '>Price</th>
                        <th className='text '>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Cart.map( items =>{
                            return <tr key={ items.ProductId } className=''>
                                        <td className='text ' data-title='Product Name'>{ items.productName }</td>
                                        <td className='text ' data-title='Amount'>{ items.Price }</td>
                                        <td className='text ' data-title='Delete'>
                                            <p  onClick={ () => dispatch(DeleteFromCart(items.ProductId)) } style={{ cursor: 'pointer' }} className="text-danger">
                                                <i className="fa fa-trash"></i>
                                            </p>
                                        </td>
                                    </tr>
                        })
                    }
                    
                </tbody>
            </table>

            <p>Total Price: ${ TotalCart }</p>

            <button onClick={ handlePay } className="btn btn-primary">Finish</button>
          </>
        }
    </div>
    )
}
