import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StartReadInvoice } from '../../Store/Actions/invoiceActions';
import { invoiceQueryFilters } from '../../Store/Constants/QueryFilter';
import jwt_decode from "jwt-decode";
import { InvoiceSearch } from './InvoiceSearch';
import { InvoiceModal } from './InvoiceModal';

export const InvoiceList = () => {

    const dispatch = useDispatch();
    const Invoice = useSelector(state => state.Invoice);
    const Auth = useSelector(state => state.Auth);
    

    var decoded = jwt_decode(Auth.token);

    useEffect(() => {

        invoiceQueryFilters.UserId = decoded.UserId;
        dispatch( StartReadInvoice(invoiceQueryFilters) );

    }, [])

    return (
    <div className='rg-container'>

        <h1>My Invoices</h1>

        <InvoiceSearch />

        <table className='rg-table' summary='Hed'>
            <thead>
                <tr>
                    <th className='text '>Date</th>
                    <th className='text '>Supplier Name</th>
                    <th className='text '>User Name</th>
                    <th className='number '>Tools</th>
                </tr>
            </thead>
            <tbody>
               {
                   Invoice.map( items =>{
                       return  <tr  className=''>
                                    <td className='text ' data-title='Date'>{ items.invoiceDate }</td>
                                    <td className='text ' data-title='supplierName'>{ items.supplier.supplierName }</td>
                                    <td className='text ' data-title='User Name'>{ items.user.userName }</td>
                                    <td className='number ' data-title='Tools'>
                                        <InvoiceModal />
                                    </td>
                                </tr>
                   })
               }
            </tbody>
        </table>
    </div>
    )
}
