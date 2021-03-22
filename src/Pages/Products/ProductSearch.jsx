import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { InputGroup } from '../../Components/InputGroup';
import { GetProducts } from '../../Store/Actions/catalogueActions';
import { productsQueryFilters } from '../../Store/Constants/QueryFilter';

export const ProductSearch = () => {

    const dispatch = useDispatch();

    //crear formialrio para sobrescribir los filtros
    const formik = useFormik({
        initialValues:{
            productName: ""
        },
        onSubmit: ( values ) => {
            //#region filters
            productsQueryFilters.productName = formik.values.productName;
            productsQueryFilters.initPrice = formik.values.initPrice;
            productsQueryFilters.endPrice = formik.values.endPrice;
            //#endregion
            dispatch(GetProducts(productsQueryFilters));
        }
    })


    return (
        <form onSubmit={ formik.handleSubmit } className="mb-4">
            <div className="row">
                <InputGroup 
                    labelTex="Product Name" 
                    InnputType="text" 
                    colSize={12}
                    name="productName"
                    value={ formik.values.productName }
                    OnChange={ formik.handleChange }
                    isInvalid={false}
                />
            </div>
            <button className="btn btn-primary mt-3">
                <i className="fa fa-search"></i>
            </button>
        </form>
    )
}
