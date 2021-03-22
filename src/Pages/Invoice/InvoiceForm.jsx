import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { GetSuppliers } from '../../Store/Actions/catalogueActions';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import jwt_decode from "jwt-decode";
//components
import { ProductList } from '../Products/ProductList';
import { CreateInvoice } from '../../Store/Actions/invoiceActions';
import { ProductCart } from '../Products/ProductCart';

export const InvoiceForm = () => {

    //selectores
    const Auth = useSelector(state => state.Auth);
    const supplier = useSelector( state => state.supplier );
    const InvoiceLoader = useSelector(state => state.InvoiceCreated);

    //dispatchs
    const dispatch = useDispatch();

    // del token necesito sacar el id del usuario y agregarlo al json que el servicio ncesita
    var decoded = jwt_decode(Auth.token);

    const schema = Yup.object({
        userId: Yup.number().default(decoded.UserId),
        comments: Yup.string().required().default(''),
        SupplierId: Yup.number().required().min(1)
    });
    //para no volver a escribir todo el objeto
    //yup tiene la funcion getDefaul para regresar el json con los valores en ''
    const formik = useFormik({
        initialValues: schema.getDefault(), //<---
        onSubmit: ( values ) => {

            //convertir valores a numeros enteros
            formik.values.userId = parseInt(formik.values.userId);
            formik.values.SupplierId = parseInt(formik.values.SupplierId);

            dispatch( CreateInvoice( values ) );
        },
        validationSchema: schema
    })

    useEffect(() => {

       dispatch(GetSuppliers())

    }, [  ])

    return (
    <>
        <form onSubmit={ formik.handleSubmit }>
            <div className="form-group">
                <label>Suppliers</label>
                <select
                    disabled={ InvoiceLoader }
                    name="SupplierId" 
                    value={ formik.values.SupplierId } 
                    onChange={ formik.handleChange }
                    className={`form-control ${formik.touched.SupplierId && Boolean(formik.errors.SupplierId)? 'is-invalid' : ''}`}>
                                <option value={ 0 } >Choose your Supplier</option>
                {
                    supplier.map(items =>{
                        return <option value={ items.supplierId } key={ items.supplierId }>{ items.supplierName }</option>
                    })
                }
                </select>
            </div>
            <div className="form-group">
                <label>Leave a comment</label>
                <textarea 
                    disabled={ InvoiceLoader }
                    name="comments" 
                    value={ formik.values.comments } 
                    onChange={ formik.handleChange } 
                    className={`form-control ${formik.touched.comments && Boolean(formik.errors.comments)? 'is-invalid' : ''}`} 
                    rows={3}
                />
            </div>
            <div className="form-group">
                <button disabled={ InvoiceLoader } type="submit" className="btn btn-primary">Create</button>
            </div>
        </form>
       
       <div className={ `${ ( !InvoiceLoader ) ? 'd-none' : '' }` } >
          <ProductList />
          <ProductCart />
       </div>

    </>
    )
}
