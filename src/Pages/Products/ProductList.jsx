import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTocart, sumTotal } from '../../Store/Actions/productActions';
import { ProductSearch } from './ProductSearch';

export const ProductList = () => {

    const Products = useSelector(state => state.Products);
    const InvoiceId = useSelector(state => state.InvoiceId);
    const dispatch = useDispatch();

    const [counter, setcounter] = useState(1);

    const handleAdd = ( values ) => {
       dispatch(AddTocart( values ));
       dispatch( sumTotal( values.Price ) );
       setcounter(1)

    }

    useEffect(() => {
       if (counter === 0) {
           setcounter( 1 )
       }
    }, [counter])

    return (
    <div className='rg-container'>

        <ProductSearch />


        <table className='rg-table' summary='Hed'>
            <thead>
                <tr>
                    <th className='text '>Product Name</th>
                    <th className='text '>Price</th>
                    <th className='text '>Amount</th>
                    <th className='text '>Tools</th>
                </tr>
            </thead>
            <tbody>
                {
                    Products.map( items => {
                        return   <tr key={ items.productId } className=''>
                                    <td className='text ' data-title='Product Name'>{ items.productName }</td>
                                    <td className='text ' data-title='Price'>{ items.price * counter }</td>
                                    <td className='text ' data-title='Amount'>
                                        <button onClick={ () => setcounter( counter + 1) } className="btn btn-pimary">
                                            <i className="fa fa-arrow-up"></i>
                                        </button>
                                        { counter }
                                        <button onClick={ () => setcounter( counter - 1) } className="btn btn-pimary">
                                            <i className="fa fa-arrow-down"></i>
                                        </button>
                                    </td>
                                    <td className='text ' data-title='Tools'>
                                        <p style={{ cursor: 'pointer' }} onClick={ ()=> handleAdd(
                                            { productName: items.productName,InvoiceId: InvoiceId, ProductId: items.productId , Amount: counter, Price: items.price * counter } //armo el objeto para el detalle
                                        ) } className="text-info">add to cart</p>
                                    </td>
                                </tr>
                    })
                }
            </tbody>
        </table>
    </div>
    )
}
