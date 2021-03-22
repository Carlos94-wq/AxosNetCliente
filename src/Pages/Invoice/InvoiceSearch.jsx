import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetSuppliers } from '../../Store/Actions/catalogueActions';
import { invoiceQueryFilters } from '../../Store/Constants/QueryFilter';
import ReactPaginate from 'react-paginate';
import jwt_decode from "jwt-decode";
import { StartReadInvoice } from '../../Store/Actions/invoiceActions';

export const InvoiceSearch = () => {

    const dispatch = useDispatch();
    const supplier = useSelector(state => state.supplier);
    const Auth = useSelector(state => state.Auth);
    const InvoiceOptions = useSelector(state => state.InvoiceOptions)

    const formik =  useFormik({
        initialValues: invoiceQueryFilters,
        onSubmit: ( values ) => {
            console.log(values);
            dispatch(StartReadInvoice(values)); //<-- cambia los filtros desde el formulario
        }
    })

    var decoded = jwt_decode(Auth.token);

    const handlePageClick = ( data ) =>{

        /*
            le paso los valores del formulario 
            al monento de cambiar de pagina estos se respenten con lo valores iniciales del 
            formulario 
        */
        const { selected } = data;
        formik.values.PageNumber = selected;
        formik.values.UserId = decoded.UserId;
      

        dispatch(StartReadInvoice(formik.values));
    }

    useEffect(() => {
        dispatch(GetSuppliers())
    }, [])

    return (
    <>
        <form onSubmit={ formik.handleSubmit }>
            <div className="row">
                <div className="col">
                    <label>Date</label>
                    <input name="InvoiceDate" value={ formik.values.InvoiceDate } onChange={ formik.handleChange }  type="date" className="form-control"/>
                </div>
                <div className="col">
                <label>Supplier</label>
                <select name="SupplierId" value={ formik.values.SupplierId } onChange={ formik.handleChange } className="form-control">
                    <option value={ "" }>Choose an Option</option>
                    {
                        supplier.map(items =>{
                            return <option value={ items.supplierId } key={ items.supplierId }>{ items.supplierName }</option>
                        })
                    }
                </select>
                </div>
            </div>
            <div className="row mt-3 m-b3">
                <div className="col-md-2">
                <label>Page Size</label>
                <select name="PageSize" value={ formik.values.PageSize } onChange={ formik.handleChange } className="form-control">
                    <option value={ 10 } >10</option>
                    <option value={ 15 } >15</option>
                    <option value={ 20 } >20</option>
                </select>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <button type="submit" className="btn btn-primary">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </form>

        <br/>

        <ReactPaginate 
            containerClassName={'pagination'}
            previousLabel={'Anterior'}
            nextLabel={'Siguiente'}
            previousClassName={'page-link'}
            nextClassName={'page-link'}
            pageCount={InvoiceOptions.totalPages} 
            pageLinkClassName={'page-link'}
            activeLinkClassName={'activeLink'}
            onPageChange={handlePageClick}
        />
    </>
    )
}
